import React from "react";
import { formatPrice, generateAmountOption } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartId }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  };
  console.log(cartItem);
  const { image, title, company, productColor, amount, cartId, price } =
    cartItem;
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          Color:{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12 ">
        <div className="form-control max-w-xs">
          <label className="label p-0" htmlFor="amount">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmountOption(amount + 5)}
          </select>
          <button
            className="mt-2 link link-primary link-hover text-sm"
            onClick={removeItemFromTheCart}
          >
            remove
          </button>
        </div>
      </div>
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
