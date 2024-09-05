import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="font-bold">SubTotal</span>
          <span className="font-bold">{formatPrice(cartTotal)}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="font-bold">Shipping</span>
          <span className="font-bold">{formatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="font-bold">Tax</span>
          <span className="font-bold">{formatPrice(tax)}</span>
        </p>
        <p className="flex justify-between text-xs  pb-2 mt-4">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
