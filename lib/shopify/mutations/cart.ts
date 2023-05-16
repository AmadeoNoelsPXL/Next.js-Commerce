import { Cart } from "../types";

export const CREATE_CART_MUTATIONS = `mutation cartCreate {
    cartCreate {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`;

export const CART_LINES_ADD_MUTATION = `
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      cost{
        subtotalAmount{
          amount
        }
      }
      lines(first: 250){
        edges{
          node{
            id
            quantity
            merchandise {
              ... on ProductVariant{
                id
                priceV2{
                  amount
                }
                product{
                  id
                  title
                  images(first: 1) {
                    edges {
                      node {
                        src
                      }
                    }
                  }
                }
              }
              
            }

          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
  
}
`;

export const CART_LINES_REMOVES_MUTATION = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      cost{
        subtotalAmount{
          amount
        }
      }
      lines(first: 250){
        edges{
          node{
            id
            quantity
            merchandise {
              ... on ProductVariant{
                id
                priceV2{
                  amount
                }
                product{
                  id
                  title
                  images(first: 1) {
                    edges {
                      node {
                        src
                      }
                    }
                  }
                }
              }
              
            }

          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
  
}
`;

export const CART_LINES_UPDATES_MUTATION = `mutation UpdateCartLineItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      cost{
        subtotalAmount{
          amount
        }
      }
      lines(first: 250){
        edges{
          node{
            id
            quantity
            merchandise {
              ... on ProductVariant{
                id
                priceV2{
                  amount
                }
                product{
                  id
                  title
                  images(first: 1) {
                    edges {
                      node {
                        src
                      }
                    }
                  }
                }
              }
              
            }

          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
  
}`;
