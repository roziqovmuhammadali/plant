import React, { useState } from "react";
import AccountInput from "../componentMyAccount/AccountInput";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("Account Details");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const renderTabContent = () => {
    switch (activeItem) {
      case "Account Details":
        return <AccountDetails />;
      case "Address":
        return <Address />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-gray-200 p-4">
      <div className="flex-col space-x-4">
        <div
          onClick={() => handleClick("Account Details")}
          className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
            activeItem === "Account Details" ? "font-semibold" : ""
          } ${activeItem === "Account Details" ? "border-b-2 border-gray-800" : ""}`}
        >
          Account Details
        </div>
        <div
          onClick={() => handleClick("Address")}
          className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
            activeItem === "Address" ? "font-semibold" : ""
          } ${activeItem === "Address" ? "border-b-2 border-gray-800" : ""}`}
        >
          Address
        </div>
        <div
          onClick={() => handleClick("Orders")}
          className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
            activeItem === "Orders" ? "font-semibold" : ""
          } ${activeItem === "Orders" ? "border-b-2 border-gray-800" : ""}`}
        >
          Orders
        </div>
        <div
          onClick={() => handleClick("Wishlist")}
          className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
            activeItem === "Wishlist" ? "font-semibold" : ""
          } ${activeItem === "Wishlist" ? "border-b-2 border-gray-800" : ""}`}
        >
          Wishlist
        </div>
        <div
          onClick={() => handleClick("Reports")}
          className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
            activeItem === "Reports" ? "font-semibold" : ""
          } ${activeItem === "Reports" ? "border-b-2 border-gray-800" : ""}`}
        >
          Reports
        </div>
        <div>Downloads</div>
        <div>Support</div>
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

const AccountDetails = () => {
  return <div>Account Details Component</div>;
};

const Address = () => {
  return (
    <div className="flex w-full justify-end  bg-white">
      <div className="flex w-[full] items-center justify-between">
        <AccountInput />
      </div>
    </div>
  );
};

export default Menu;
