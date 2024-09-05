import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  // console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItemsList;
