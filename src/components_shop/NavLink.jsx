import React from "react";
import { NavLink } from "react-router-dom";

const NavLin = () => {
  return (
    <div className="pl-[100px] pt-10">
      <ul className="flex gap-2">
        <li className="font-bold">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>/</li>
        <li>Shop</li>
      </ul>
    </div>
  );
};

export default NavLin;
