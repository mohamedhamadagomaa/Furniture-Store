import React from "react";
import { SectionTitle, CartItemsList, CartTotals } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const { user } = useSelector((state) => state.userState);
 
  console.log(user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) return <SectionTitle text={"Your cart is Empty"} />;
  return (
    <>
      <SectionTitle text={"shopping cart"} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to={"/checkout"}
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
