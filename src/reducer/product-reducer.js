import { products } from "../store/data";

export const initialState = {
  filteredProducts: [],
  products: products,
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let filteredProducts;
  let products;

  switch (type) {
    case "FILTER_PRODUCTS":
      filteredProducts = payload.allProducts.filter(
        (product) => product.category == payload.categorayName
      );

      return { filteredProducts, products };
    case "ADD_TO_CART":
      products = state.products;
      filteredProducts = state.filteredProducts.map((product) => {
        if (product.title == payload) {
          product.inventoryCount = product.inventoryCount - 1;
        }
        return product;
      });

      return { filteredProducts, products };

    case "DELETE_FROM_CART":
      products = state.products;
      filteredProducts = state.filteredProducts.map((product) => {
        if (product.title == payload) {
          product.inventoryCount = product.inventoryCount + 1;
        }
        return product;
      });

      return { filteredProducts, products };

    default:
      return state;
  }
};
