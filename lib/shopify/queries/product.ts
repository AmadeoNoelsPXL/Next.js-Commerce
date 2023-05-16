export const getProductsBasedOnTag = `query GetProducts($cursor: String, $query: String) {
  products(first: 30, after: $cursor, query:$query) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        title
        totalInventory

        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              priceV2{
                amount
              }

            }
          }
        }
      }
    }
  }

}`;
