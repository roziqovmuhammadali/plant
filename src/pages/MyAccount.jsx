import React, { useState } from "react";
import AccountInput from "../componentMyAccount/AccountInput";
import Navbar from "../components/Navbar";

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
    <div>
      <Navbar />
      <div className="p-10">
        <div className="flex justify-around">
          <div className="h-[400px] w-[293px] flex-col bg-[#FBFBFB] p-12 text-[19px] leading-[45px]">
            <div
              onClick={() => handleClick("Account Details")}
              className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
                activeItem === "Account Details" ? "bg-white font-semibold" : ""
              } ${activeItem === "Account Details" ? "border-b-2 border-gray-800" : ""}`}
            >
              Account Details
            </div>
            <div
              onClick={() => handleClick("Address")}
              className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
                activeItem === "Address" ? "bg-white font-semibold" : ""
              } ${activeItem === "Address" ? "border-b-2 border-gray-800" : ""}`}
            >
              Address
            </div>
            <div>Orders</div>
            <div>Wishlist</div>
            <div>Reports</div>
            <div>Downloads</div>
            <div>Support</div>
          </div>
          <div className="">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

const AccountDetails = () => {
  return (
    <div className=" w-full   bg-white">
      <AccountInput />
    </div>
  );
};

const Address = () => {
  return (
    <div className=" w-full   bg-white">
      <AccountInput />
    </div>
  );
};

export default Menu;
