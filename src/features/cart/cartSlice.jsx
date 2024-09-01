import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      // console.log(product);
      const item = state.cartItems.find((i) => i.cartId === product.cartId);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Item added");
    },
    clearItems: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});
export const { addItem, clearItems, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
