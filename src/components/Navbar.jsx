import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* navbar start */}
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to={"/"}
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            F
          </NavLink>
          {/* dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rou w-40"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        {/* navbar end */}
        <div className="navbar-end">
          {/* them icons */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon */}

            <BsSunFill className="swap-off h4 w-4" />
            {/* moon icon */}
            <BsMoonFill className="swap-on h4 w-4" />
          </label>
          {/* cart links */}
          <NavLink
            to={"cart"}
            className={"btn btn-ghost btn-circle btn-md ml-4"}
          >
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
