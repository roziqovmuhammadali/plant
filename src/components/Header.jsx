import React from "react";
import header from "../../public/headerimg.svg";
import images from "../../public/download.jpg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Header = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          className: "swiper-pagination-bullet",
        }}
      >
        <SwiperSlide>
          <div className="flex h-[600px] w-full items-center justify-between px-[80px]">
            <div className="flex w-[50%] flex-col items-start justify-center space-y-2 pt-20">
              <h3 className="font-medium leading-4 text-[#3D3D3D]">
                Welcome to GreenShop
              </h3>
              <h1 className="max-w-[527px] text-[70px] font-black leading-tight text-[#3D3D3D]">
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">Planet</span>
              </h1>
              <p className="max-w-[554px] pb-[40px] text-[14px] font-normal leading-6 text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="h-[40px] w-[139px] rounded-md bg-[#46A358] text-[16px] font-bold leading-5 text-white ">
                SHOP NOW
              </button>
            </div>
            <div className="h-full w-[50%]">
              <img src={header} alt="img" className=" h-full w-full" />
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[600px] w-full items-center justify-between px-[80px]">
            <div className="flex w-[50%] flex-col items-start justify-center space-y-2 p-[40px] pt-20">
              <h3 className="font-medium leading-4 text-[#3D3D3D]">
                Welcome to GreenShop
              </h3>
              <h1 className="max-w-[527px] text-[70px] font-black leading-tight text-[#3D3D3D]">
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">Planet</span>
              </h1>
              <p className="max-w-[554px] pb-[40px] text-[14px] font-normal leading-6 text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="h-[40px] w-[139px] rounded-md bg-[#46A358] text-[16px] font-bold leading-5 text-white ">
                SHOP NOW
              </button>
            </div>
            <div className="h-full w-[50%]">
              <img
                src="https://st5.depositphotos.com/35914836/64906/i/450/depositphotos_649066108-stock-photo-pink-flowers-park-spring-bloosom.jpg"
                alt="img"
                className=" h-full w-full"
              />
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[600px] w-full items-center justify-between px-[80px]">
            <div className="flex w-[50%] flex-col items-start justify-center space-y-2 p-[40px] pt-20">
              <h3 className="font-medium leading-4 text-[#3D3D3D]">
                Welcome to GreenShop
              </h3>
              <h1 className="max-w-[527px] text-[70px] font-black leading-tight text-[#3D3D3D]">
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">Planet</span>
              </h1>
              <p className="max-w-[554px] pb-[40px] text-[14px] font-normal leading-6 text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="h-[40px] w-[139px] rounded-md bg-[#46A358] text-[16px] font-bold leading-5 text-white ">
                SHOP NOW
              </button>
            </div>
            <div className="h-full w-[50%]">
              <img
                src="https://i.pinimg.com/474x/db/f8/85/dbf8854b875c08f25dbd005734bbce83.jpg"
                alt="img"
                className=" h-full w-full"
              />
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
