import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../reducer/actions";
export default function SimpleCart(props) {
  const state = useSelector((state) => state.cart.cartProducts); //to acsses state we initial it inside action
  const dispatch = useDispatch();

  function deleteHandler(product) {
    // if (!state.cart.cartProducts.includes(product)) {
    console.log(product);
    dispatch(deleteFromCart(product));
    // }
  }
  return (
    <div>
      <div id="simple-cart">
        <ul>
          {state.map((product) => (
            <>
              <li id="li">
                {product}{" "}
                <button onClick={() => deleteHandler(product)}>Delete</button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
