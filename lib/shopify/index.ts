import {
  CREATE_CART_MUTATIONS,
  CART_LINES_ADD_MUTATION,
  CART_LINES_REMOVES_MUTATION,
  CART_LINES_UPDATES_MUTATION,
} from "./mutations/cart";
import { getProductsBasedOnTag } from "./queries/product";
import { Cart, Product, ShopifyProduct } from "./types";

const API_URL =
  "https://motorstore-2063.myshopify.com//api/2023-01/graphql.json";

const API_HEADERS: Record<string, string> = {
  "X-Shopify-Storefront-Access-Token":
    process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN!,
  Accept: "application/json",
  "Content-Type": "application/json",
};
function getCartFromResponse(responseCart: any): Cart {
  console.log(responseCart);
  return {
    subtotal: responseCart.cost.subtotalAmount.amount,
    id: responseCart.id,
    lines: responseCart.lines.edges.map((line: any) => {
      const merchandise = line.node.merchandise;
      return {
        id: merchandise.product.id,
        title: merchandise.product.title,
        image: merchandise.product.images.edges[0].node.src,
        price: merchandise.priceV2.amount,
        variantId: merchandise.id,
        quantity: line.node.quantity,
        lineId: line.node.id,
      };
    }),
  };
}

async function sendGraphQLRequest(
  query: string,
  variables: Record<string, any> = {}
): Promise<any> {
  const requestOption: RequestInit = {
    method: "POST",
    headers: API_HEADERS,
    body: JSON.stringify({ query, variables }),
  };

  try {
    const response = await fetch(API_URL, requestOption);
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("An error occurred during the GraphQL request.");
  }
}

export async function getProductsByTag(
  cursor: string | null = null,
  products: Product[],
  filter?: string
): Promise<Array<Product>> {
  const queryInput = filter === undefined ? "" : `tag:${filter}`;
  const query = getProductsBasedOnTag;

  const variables = {
    cursor,
    query: queryInput,
  };

  const data = await sendGraphQLRequest(query, variables);
  const edges = data.products.edges;
  const hasNextPage = data.products.pageInfo.hasNextPage;

  const transformedProducts: Product[] = edges.map(
    (edge: { node: ShopifyProduct }) => {
      const shopifyProduct = edge.node;
      const { id, title, totalInventory } = shopifyProduct;
      const image = shopifyProduct.images.edges[0].node.src;
      const price = shopifyProduct.variants.edges[0].node.priceV2.amount;
      const variantId = shopifyProduct.variants.edges[0].node.id;

      return {
        id,
        title,
        image,
        price,
        variantId,
        inventory: totalInventory,
      };
    }
  );

  products = products.concat(transformedProducts);

  if (hasNextPage) {
    const endcursor = edges[edges.length - 1].cursor;
    return getProductsByTag(endcursor, products, filter);
  } else {
    return products;
  }
}

export async function createCart(): Promise<Cart> {
  const query = CREATE_CART_MUTATIONS;

  const { cartCreate } = await sendGraphQLRequest(query);
  console.log(cartCreate);
  sessionStorage.setItem("cartId", cartCreate.cart.id);

  return {
    subtotal: 0,
    lines: [],
    id: cartCreate.cart.id,
  };
}

export async function addProduct(productVariant: string): Promise<Cart> {
  const query = CART_LINES_ADD_MUTATION;
  const cartId = sessionStorage.getItem("cartId") || "";
  const variables = {
    cartId: cartId,
    lines: { merchandiseId: `${productVariant}`, quantity: 1 },
  };

  const { cartLinesAdd } = await sendGraphQLRequest(query, variables);
  return getCartFromResponse(cartLinesAdd.cart);
}

export async function updateProduct(
  lineId: string,
  quantity: number,
  modifierExtra: boolean,
  merchandiseId: string
): Promise<Cart> {
  const query = CART_LINES_UPDATES_MUTATION;
  const cartId = sessionStorage.getItem("cartId");
  console.log(cartId);
  console.log(lineId);
  const variables = {
    cartId: cartId,
    lines: {
      id: lineId,
      merchandiseId: merchandiseId,
      quantity: modifierExtra ? quantity + 1 : quantity - 1,
    },
  };

  const { cartLinesUpdate } = await sendGraphQLRequest(query, variables);

  return getCartFromResponse(cartLinesUpdate.cart);
}
