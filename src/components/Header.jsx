import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "../features/user/userSlice";
import { clearItems } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
    dispatch(clearItems());
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* User*/}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello , {user.username}</p>
            <button className="uppercase btn btn-outline btn-primary btn-xs" onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to={"/login"} className="link link-hover text-xs sm:text-sm">
              Sign In / Guest
            </Link>
            <Link
              to={"/register"}
              className="link link-hover text-xs sm:text-sm"
            >
              Create Account
            </Link>
          </div>
        )}
        {/* Links*/}
      </div>
    </header>
  );
};

export default Header;
