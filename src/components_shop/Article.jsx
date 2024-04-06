import React from "react";
import images1 from "../../public/image  1.jpg";
import images2 from "../../public/image  2.jpg";
import images3 from "../../public/image  3.jpg";
import images4 from "../../public/image  5.jpg";
import Rating from "@mui/material/Rating";
import IconCheckboxes from "../components/Chack";
const Article = () => {
  return (
    <div className="mb-6 flex w-full px-[120px] py-3">
      <div className="flex p-2">
        <div className="my-10 h-[444px] w-[100px] space-y-7 bg-white">
          <div className=" h-[100px] w-[100px]">
            <img src={images1} alt="logo" />
          </div>
          <div className=" h-[100px] w-[100px]">
            <img src={images2} alt="logo" />
          </div>
          <div className="h-[100px] w-[100px]">
            <img src={images3} alt="logo" />
          </div>
          <div className="h-[100px] w-[100px]">
            <img src={images4} alt="logo" />
          </div>
        </div>
        <div className="h-[448px] w-[573px] p-[27px]">
          <div className="">
            <img src={images1} alt="logo" />
          </div>
        </div>
      </div>
      <div className="w-[574px] p-[23px]">
        <div className="w-full space-y-5">
          <h1 className="text-[28px] font-bold leading-4 text-[#3D3D3D]">
            Barberton Daisy
          </h1>
          <div className="flex w-full justify-between">
            <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
              $169.00
            </p>
            <span className="flex gap-4">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <p>19 Customer Review</p>
            </span>
            <hr />
          </div>
          <div>
            <h1 className="pb-3 text-[15px] font-bold ">Short Description:</h1>
            <p className="text-[14px] font-normal leading-6">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.
            </p>
            <br />
            <h1 className="pb-3 text-[15px] font-bold ">Size:</h1>
            <span className="flex gap-2 text-[#46A358]">
              <p className="text-bold flex h-7 w-7 items-center justify-center rounded-[50%] border-[2px] border-solid border-[#46A358] text-[14px]">
                S
              </p>
              <p className="text-bold flex h-7 w-7 items-center justify-center rounded-[50%] border-[2px] border-solid border-[#46A358] text-[14px]">
                M
              </p>
              <p className="text-bold flex h-7 w-7 items-center justify-center rounded-[50%] border-[2px] border-solid border-[#46A358] text-[14px]">
                L
              </p>
              <p className="text-bold flex h-7 w-7 items-center justify-center rounded-[50%] border-[2px] border-solid border-[#46A358] text-[14px]">
                XL
              </p>
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 text-white ">
              <button className="text-bold flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#46A358] text-[18px]">
                -
              </button>
              <p className="text-bold flex h-7 w-7 items-center justify-center rounded-[50%] text-[14px] text-[#3D3D3D]">
                1
              </p>
              <button className="text-bold flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#46A358] text-[18px]">
                +
              </button>
            </div>
            <div className="flex gap-3">
              <button className=" h-[40px] w-[130px] rounded-md bg-[#46A358] font-medium text-white">
                BUY NOW
              </button>
              <button className=" h-[40px] w-[130px] rounded-md border font-medium text-[#46A358]">
                ADD TO CARD
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-[#46A358] text-[#46A358]">
                <IconCheckboxes />
              </button>
            </div>
          </div>
          <div>
            <p className="text-oridinary mb-[10px] text-[14px]">
              <span className="opacity-80"> SKU:</span> 1995751877966
            </p>
            <p className="text-oridinary mb-[10px] text-[14px]">
              <span className="opacity-80"> Categories:</span> Potter Plants
            </p>
            <p className="text-oridinary mb-[18px] text-[14px]">
              <span className="opacity-80"> Tags:</span> Home, Garden, Plants
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[14px] font-medium">Share this products:</p>
              <div className="flex items-center justify-center gap-3">
                <svg
                  width="8.000000"
                  height="15.000000"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id="Facebook"
                    d="M1.87 5L0 5L0 7.5L1.87 7.5L1.87 15L5 15L5 7.5L7.25 7.5L7.5 5L5 5L5 3.93C5 3.37 5.12 3.12 5.68 3.12L7.5 3.12L7.5 0L5.12 0C2.87 0 1.87 1 1.87 2.87L1.87 5Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="15.000000"
                  height="13.000000"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id="Twitter"
                    d="M4.71 12.19C10.37 12.19 13.47 7.5 13.47 3.43C13.47 3.3 13.47 3.16 13.46 3.03C14.06 2.6 14.58 2.06 15 1.44C14.44 1.68 13.85 1.85 13.23 1.92C13.86 1.54 14.35 0.94 14.58 0.22C13.99 0.57 13.33 0.83 12.63 0.97C12.07 0.37 11.27 0 10.38 0C8.68 0 7.3 1.37 7.3 3.07C7.3 3.31 7.33 3.55 7.38 3.77C4.82 3.65 2.56 2.42 1.04 0.56C0.77 1.01 0.62 1.54 0.62 2.11C0.62 3.17 1.17 4.12 1.99 4.67C1.49 4.65 1.01 4.51 0.6 4.28C0.6 4.29 0.6 4.31 0.6 4.32C0.6 5.81 1.66 7.06 3.07 7.34C2.81 7.41 2.54 7.45 2.25 7.45C2.06 7.45 1.86 7.43 1.68 7.39C2.07 8.61 3.2 9.5 4.55 9.53C3.5 10.35 2.17 10.85 0.73 10.85C0.48 10.85 0.24 10.83 0 10.8C1.36 11.68 2.97 12.19 4.71 12.19Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id="Linkedin"
                    d="M3.12 1.56C3.12 2.43 2.43 3.12 1.56 3.12C0.68 3.12 0 2.43 0 1.56C0 0.68 0.68 0 1.56 0C2.43 0 3.12 0.68 3.12 1.56ZM3.12 4.37L0 4.37L0 14.37L3.12 14.37L3.12 4.37ZM8.12 4.37L5 4.37L5 14.37L8.12 14.37L8.12 9.12C8.12 6.18 11.87 5.93 11.87 9.12L11.87 14.37L15 14.37L15 8.06C15 3.12 9.43 3.31 8.12 5.75L8.12 4.37Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="15.000000"
                  height="12.000000"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id="Vector 13 (Stroke)"
                    d="M7 1.09C5.3 1.09 2.98 1.23 1.51 1.34C1.03 1.37 0.65 1.76 0.65 2.23L0.65 2.76L6.53 5.85C6.82 6.01 7.17 6.01 7.46 5.85L13.34 2.76L13.34 2.23C13.34 1.76 12.96 1.37 12.48 1.34C11.01 1.23 8.69 1.09 7 1.09ZM13.34 4.01L8.02 6.81C7.38 7.14 6.61 7.14 5.97 6.81L0.65 4.01L0.65 9.76C0.65 10.23 1.03 10.62 1.51 10.65C2.98 10.76 5.3 10.9 7 10.9C8.69 10.9 11.01 10.76 12.48 10.65C12.96 10.62 13.34 10.23 13.34 9.76L13.34 4.01ZM1.43 0.25C2.9 0.14 5.25 0 7 0C8.74 0 11.09 0.14 12.56 0.25C13.66 0.33 14.5 1.2 14.5 2.23L14.5 9.76C14.5 10.79 13.66 11.66 12.56 11.74C11.09 11.85 8.74 12 7 12C5.25 12 2.9 11.85 1.43 11.74C0.33 11.66 -0.5 10.79 -0.5 9.76L-0.5 2.23C-0.5 1.2 0.33 0.33 1.43 0.25Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
