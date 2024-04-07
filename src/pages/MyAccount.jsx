import React, { useState } from "react";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4">
      <div className="flex space-x-4">
        <MenuItem
          title="Account Details"
          activeItem={activeItem}
          onClick={handleClick}
        />
        <MenuItem
          title="Address"
          activeItem={activeItem}
          onClick={handleClick}
        />
        <MenuItem
          title="Orders"
          activeItem={activeItem}
          onClick={handleClick}
        />
        <MenuItem
          title="Wishlist"
          activeItem={activeItem}
          onClick={handleClick}
        />
        <MenuItem
          title="Reports"
          activeItem={activeItem}
          onClick={handleClick}
        />
        <MenuItem
          title="Downloads"
          activeItem={activeItem}
          onClick={handleClick}
        />
        <MenuItem
          title="Support"
          activeItem={activeItem}
          onClick={handleClick}
        />
      </div>
      <div>
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

const MenuItem = ({ title, activeItem, onClick }) => {
  return (
    <button
      onClick={() => onClick(title)}
      className={`text-gray-600 hover:text-gray-800 ${activeItem === title ? "font-semibold" : ""}`}
    >
      {title}
    </button>
  );
};

export default Menu;
