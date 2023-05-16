export type Product = {
  lineId?: string;
  id: string;
  title: string;
  image: string;
  price: number;
  variantId: string;
  quantity?: number;
  inventory?: number;
};

export type ShopifyProduct = {
  id: string;
  title: string;
  variants: any;
  images: any;
  price: any;
  totalInventory: number;
};

export type Cart = {
  subtotal: number;
  id: string;
  lines: Array<Product>;
};
