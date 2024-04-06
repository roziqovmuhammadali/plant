import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkCheckout = () => {
  return (
    <div className="py-10 pl-[100px]">
      <ul className="flex gap-2">
        <li className="font-bold">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>/</li>
        <li className="font-bold">
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>/</li>
        <li>Checkout</li>
      </ul>
    </div>
  );
};

export default NavLinkCheckout;
