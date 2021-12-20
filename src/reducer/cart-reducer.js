export const initialState = {
  cartProducts: [],
};
export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let cartProducts;
  switch (type) {
    case "ADD_TO_CART":
      return { cartProducts: [...state.cartProducts, payload] };
    case "DELETE_FROM_CART":
      cartProducts = state.cartProducts.filter((e) => e !== payload);
      return { cartProducts };
    default:
      return state;
  }
};
