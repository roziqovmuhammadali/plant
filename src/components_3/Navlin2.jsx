import React from "react";
import { NavLink } from "react-router-dom";

const NavLin2 = () => {
  return (
    <div className="pl-[100px] pt-10">
      <ul className="flex gap-2">
        <li className="font-bold">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>/</li>
        <li className="font-bold">
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>/</li>
        <li>Shopping Cart</li>
      </ul>
    </div>
  );
};

export default NavLin2;
