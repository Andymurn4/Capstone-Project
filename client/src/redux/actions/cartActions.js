import * as actionTypes from "../typeDefs/cartConstants";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

// export function addToCart(id, quantity) {
//   return (dispatch) =>
//     axios.get(`/api/products/${id}`).then((data) => {
//       console.log("data", data);
//       dispatch({
//         type: actionTypes.ADD_TO_CART,
//         payload: {
//           product: data._id,
//           name: data.name,
//           imageUrl: data.imageUrl,
//           price: data.price,
//           countInStock: data.countInStock,
//           quantity,
//         },
//       });
//     });
// }
