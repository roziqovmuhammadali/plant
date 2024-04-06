import React from "react";
import logo from "../../public/Logo.svg";
import location from "../../public/Location.svg";
import message from "../../public/Message.svg";
import call from "../../public/Calling.svg";
import facebook from "../../public/Facebook.svg";
import instagram from "../../public/Instagram.svg";
import twitter from "../../public/Twitter.svg";
import linkedin from "../../public/Linkedin.svg";
import pay from "../../public/image 16.svg";
import union from "../../public/Union.svg";

const Box = ({ image, title, subtitle, data }) => {
  return (
    <div className=" flex w-[300px] flex-col items-center justify-start rounded border-r-2 bg-[#FBFBFB] pt-3">
      <img
        className="
      mr-28 text-start "
        src={image}
        alt="Box Image"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="pb-2 text-base text-gray-700">{subtitle}</p>
      </div>
    </div>
  );
};

const boxesData = [
  {
    image: "../../public/plant.png",
    title: "Garden Care",
    subtitle:
      "We are an online plant shop offering a wide range of cheap and trendy plants. ",
  },
  {
    image: "../../public/cactus.png",
    title: "Plant Renovation",
    subtitle:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    image: "../../public/teapot.png",
    title: "Watering Graden",
    subtitle:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between px-[100px] pt-10">
        <div className="flex w-full items-center gap-3 bg-[#FBFBFB] pb-6">
          <div className="flex justify-center ">
            {boxesData.map((box, index) => (
              <Box key={index} {...box} />
            ))}
          </div>
          <div className="flex flex-col items-start justify-start gap-4 bg-[#FBFBFB]">
            <h1 className="text-[18px] font-bold leading-4">
              Would you like to join newsletters?
            </h1>
            <div>
              <input
                type="text"
                placeholder="enter your email address..."
                className="h-10 w-[269px] rounded-l-md bg-[rgb(255,255,255)] p-3"
              />
              <button className="h-10 w-[85px] rounded-r-md bg-[#46A358] text-[18px] font-bold leading-4 text-white">
                Join
              </button>
            </div>
            <p className=" h-[89px] w-[354px] text-[14px] font-normal leading-6">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-[60px] border-[3px] border-solid border-[#46A358] bg-[#ECF6EE] p-[23px] pb-6 text-[17px] font-normal leading-6">
          <div>
            <span>
              <img src={logo} alt="logo" />
            </span>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <span>
              <img src={location} alt="logo" />
            </span>
            <span>
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </span>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <span>
              <img src={message} alt="mes" />
            </span>
            <span>contact@greenshop.com</span>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <span>
              <img src={call} alt="cal" />
            </span>
            <span>+88 01911 717 490</span>
          </div>
        </div>
        <div className=" flex w-full items-start justify-between gap-3 bg-[#FBFBFB] p-[23px] pb-6 pt-10 text-[14px] font-normal leading-8">
          <ul>
            <li className=" text-[18px] font-bold leading-4">My Account</li>
            <li>My Account</li>
            <li>Our stores</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
          <ul>
            <li className=" text-[18px] font-bold leading-4">Help & Guide</li>
            <li>Help Center </li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
          <ul>
            <li className=" text-[18px] font-bold leading-4">Categories</li>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
          <ul className="pr-16">
            <li className=" pb-3 text-[18px] font-bold leading-4">
              Social Media
            </li>
            <li className="mb-3 flex gap-2">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white">
                <img src={facebook} alt="logo" />
              </span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white">
                <img src={instagram} alt="logo" />
              </span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white">
                <img src={twitter} alt="logo" />
              </span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white">
                <img src={linkedin} alt="logo" />
              </span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white">
                <img src={union} alt="logo" />
              </span>
            </li>
            <li className=" pb-3 text-[18px] font-bold leading-6">We accept</li>
            <li>
              <img src={pay} alt="logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
