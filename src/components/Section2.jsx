import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Box = ({ image, title, subtitle, data }) => {
  return (
    <div className=" flex w-[310px] flex-col items-center justify-center overflow-hidden rounded bg-[#FBFBFB] shadow-lg">
      <img className="w-250px " src={image} alt="Box Image" />
      <div className="px-6 py-4">
        <p className="text-base font-medium text-gray-700 hover:text-[#46A358]">
          {data}
        </p>
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="pb-2 text-base text-gray-700">{subtitle}</p>
        <button className="text-[18px] font-medium leading-4 ">
          <span>Read More</span>
          <span>
            <ArrowForwardIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

const boxesData = [
  {
    image: "../../public/01.svg",
    title: "Cactus & Succulent Care Tips",
    subtitle:
      "Cacti are succulents are easy care plants for any home or patio. ",
    data: "September 12  I Read in 6 minutes",
  },
  {
    image: "../../public/02.svg",
    title: "Top 10 Succulents for Your Home",
    subtitle: "Best in hanging baskets. Prefers medium to high light.",
    data: "September 13  I Read in 2 minutes",
  },
  {
    image: "../../public/03.svg",
    title: "Tips for Caring for Cacti And Succulents Book",
    subtitle:
      "Cacti and succulents thrive in containers and because most are..",
    data: "September 15  I Read in 3 minutes",
  },
  {
    data: "September 15  I Read in 2 minutes",
    image: "../../public/04.svg",
    title: "Best Houseplants Room by Room",
    subtitle: "The benefits of houseplants are endless. In addition to..",
  },
];

const Section2 = () => {
  return (
    <div className="w-full items-center justify-between space-y-6 pt-10">
      <div className="flex h-[180px] w-full flex-col items-center justify-center">
        <h1 className="pb-9 text-[38px] font-bold leading-4 text-[#3D3D3D]">
          Our Blog Posts
        </h1>
        <p className=" text-[16px] font-normal leading-6 text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="flex justify-center gap-5">
        {boxesData.map((box, index) => (
          <Box key={index} {...box} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
