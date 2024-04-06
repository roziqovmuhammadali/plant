import React from "react";
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import IconCheckboxes from "./Chack";

import image1 from "../../public/image  1.jpg";
import image2 from "../../public/image  2.jpg";
import image3 from "../../public/image  3.jpg";
import image4 from "../../public/image  4.png";
import image5 from "../../public/image  5.jpg";
import image6 from "../../public/image  6.jpg";
import image7 from "../../public/image  7.jpg";
import image8 from "../../public/image  8.jpg";
import image9 from "../../public/image  9.jpg";

function PlantCard2() {
  return (
    <>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image3}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          African Violet
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $199.00
        </p>
      </div>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image4}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          Beach Spider Lily
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $129.00
        </p>
      </div>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image5}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          Blushing Bromeliad
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $139.00
        </p>
      </div>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image6}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          Aluminum Plant
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $179.00
        </p>
      </div>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image7}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          Bird's Nest Fern
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $99.00
        </p>
      </div>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image8}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          Broadleaf Lady Palm
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $59.00
        </p>
      </div>
      <div className="card group relative space-y-3 pb-[50px]">
        <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
          <div className="h-[250px] w-[250px] px-1">
            <img
              src={image9}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-[#46A358]">
              <ShoppingCartIcon />
            </span>
            <span className="text-[#46A358]">
              <IconCheckboxes />
            </span>
            <SearchIcon />
          </div>
        </div>
        <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
          Chinese Evergreen
        </h1>
        <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
          $39.00
        </p>
      </div>
    </>
  );
}

export default PlantCard2;
