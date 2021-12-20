export function selectCategory(categorayName) {
  return {
    type: "SELECT_CATEGORY",
    payload: categorayName,
  };
}

export function filterProducts(categorayName, allProducts) {
  console.log("categorayName", "allProducts", categorayName, allProducts);
  return {
    type: "FILTER_PRODUCTS",
    payload: { categorayName, allProducts },
  };
}

export function addToCart(productName) {
  return {
    type: "ADD_TO_CART",
    payload: productName,
  };
}
export function deleteFromCart(productName) {
  return {
    type: "DELETE_FROM_CART",
    payload: productName,
  };
}
