import React, { useState } from "react";
import AccountInput from "../componentMyAccount/AccountInput";
import Navbar from "../components/Navbar";
import AccountPassword from "../componentMyAccount/AccountPassword";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

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
          <div className="h-[470px] w-[293px] flex-col bg-[#FBFBFB] p-12 text-[19px] leading-[45px]">
            <h1 className="mr-10 text-[18px] font-bold">My Account</h1>
            <div
              onClick={() => handleClick("Account Details")}
              className={`cursor-pointer space-x-1 text-[#727272]  ${
                activeItem === "Account Details"
                  ? "bg-white font-semibold text-[#46A358]"
                  : ""
              } ${activeItem === "Account Details" ? "border-b-2 border-gray-800" : ""}`}
            >
              <span>
                <PersonOutlineOutlinedIcon />
              </span>
              <span>Account Details</span>
            </div>
            <div
              onClick={() => handleClick("Address")}
              className={`cursor-pointer space-x-1 text-[#727272]  ${
                activeItem === "Address"
                  ? "bg-white font-semibold text-[#46A358]"
                  : ""
              } ${activeItem === "Address" ? "border-b-2 border-gray-800" : ""}`}
            >
              <span>
                <AddLocationOutlinedIcon />
              </span>
              <span>Address</span>
            </div>
            <div className="space-x-1 text-[#727272]">
              <span>
                <ShoppingCartOutlinedIcon />
              </span>
              <span>Orders</span>
            </div>
            <div className="space-x-1 text-[#727272]">
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
              <span>Wishlist</span>
            </div>
            <div className="space-x-1 text-[#727272]">
              {" "}
              <span>
                <AutoGraphOutlinedIcon />
              </span>
              <span>Reports</span>
            </div>
            <div className="space-x-1 text-[#727272]">
              {" "}
              <span>
                <FileDownloadOutlinedIcon />
              </span>{" "}
              <span>Downloads</span>
            </div>
            <div className="space-x-1 text-[#727272]">
              {" "}
              <span>
                <PrivacyTipOutlinedIcon />
              </span>{" "}
              <span>Support</span>
            </div>
            <hr />
            <div>
              <button className="h-[40px] w-[98px] space-x-1 rounded-md text-[16px] font-bold text-[#46A358]">
                <span>
                  <LoginOutlinedIcon />
                </span>{" "}
                <span>Loguot</span>
              </button>
            </div>
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
      <AccountPassword />
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
