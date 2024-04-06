import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import image1 from "../../public/image  1.jpg";
import image2 from "../../public/image  2.jpg";
import image3 from "../../public/image  3.jpg";
import { NavLink } from "react-router-dom";

const Table = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function handleSubmit() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function handleSubmit2() {
    setCount2((prevCount) => prevCount + 1);
  }
  function decrement2() {
    setCount2((prevCount) => prevCount - 1);
  }
  return (
    <div className="my-8 flex w-full justify-center gap-5 px-[100px] ">
      <table className="h-[300px] w-[952px] table-fixed border-collapse">
        <thead className="w-full">
          <tr className=" border-b-2  text-[16px] font-medium text-[#3D3D3D]">
            <th className=" border-b border-gray-300 pr-24">Products</th>
            <th className=" border-b border-gray-300 p-2">Price</th>
            <th className=" border-b border-gray-300 p-2">Quantity</th>
            <th className=" border-b border-gray-300 p-2">Total</th>
            <th className=" border-b border-gray-300 p-2"></th>
          </tr>
        </thead>
        <tbody className=" w-full space-y-5 bg-white text-[13px] font-normal ">
          <tr className=" h-12 w-full border-b-4 border-white bg-[#FBFBFB]">
            <td className=" flex items-center gap-2 px-3">
              <img src={image1} alt="logo" className="h-[70px] w-[70px]" />

              <span>
                <h1 className=" font-bold">Barberton Daisy</h1>
                <p className="flex items-center justify-center text-[12px]">
                  <p className="text-[9px]">SKU:</p> 1995751877966
                </p>
              </span>
            </td>
            <td className=" pl-20">$119.00</td>
            <td className=" pl-[67px]">
              <div className="flex gap-2">
                <button
                  type="submit"
                  onClick={decrement}
                  className="flex h-[23px] w-[21px] items-center justify-center rounded-[50%] bg-[#46A358] text-white"
                >
                  -
                </button>
                <p>{count}</p>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex h-[23px] w-[21px] items-center justify-center rounded-[50%] bg-[#46A358] text-white"
                >
                  +
                </button>
              </div>
            </td>
            <td className="pl-20 text-[16px] font-bold text-[#46A358]">
              $238.00
            </td>
            <td className=" pl-20">
              <DeleteOutlineOutlinedIcon />
            </td>
          </tr>

          <tr className=" h-12 w-full border-b-4 border-white bg-[#FBFBFB]">
            <td className=" flex items-center gap-2 px-3">
              <img src={image2} alt="logo" className="h-[70px] w-[70px]" />

              <span>
                <h1 className=" font-bold">Blushing Bromeliad</h1>
                <p className="flex items-center justify-center text-[12px]">
                  <p className="text-[9px]">SKU:</p> 19957518757065
                </p>
              </span>
            </td>
            <td className=" pl-20">$139.00</td>
            <td className=" pl-[67px]">
              <div className="flex gap-2">
                <button
                  type="submit"
                  onClick={decrement2}
                  className="flex h-[23px] w-[21px] items-center justify-center rounded-[50%] bg-[#46A358] text-white"
                >
                  -
                </button>
                <p>{count2}</p>
                <button
                  type="submit"
                  onClick={handleSubmit2}
                  className="flex h-[23px] w-[21px] items-center justify-center rounded-[50%] bg-[#46A358] text-white"
                >
                  +
                </button>
              </div>
            </td>
            <td className="pl-20 text-[16px] font-bold text-[#46A358]">
              $834.00
            </td>
            <td className=" pl-20">
              <DeleteOutlineOutlinedIcon />
            </td>
          </tr>

          <tr className="h-12 w-full border-b-4 border-white bg-[#FBFBFB]">
            <td className=" flex items-center gap-2 px-3">
              <img src={image3} alt="logo" className="h-[70px] w-[70px]" />

              <span>
                <h1 className=" font-bold">Aluminum Plant</h1>
                <p className="flex items-center justify-center text-[12px]">
                  <p className="text-[9px]">SKU:</p> 1995751877786
                </p>
              </span>
            </td>
            <td className=" pl-20">$179.00</td>
            <td className=" pl-[67px]">
              <div className="flex gap-2">
                <button className="flex h-[23px] w-[21px] items-center justify-center rounded-[50%] bg-[#46A358] text-white">
                  -
                </button>
                <p>{9}</p>
                <button className="flex h-[23px] w-[21px] items-center justify-center rounded-[50%] bg-[#46A358] text-white">
                  +
                </button>
              </div>
            </td>
            <td className="pl-20 text-[16px] font-bold text-[#46A358]">
              $1,611.00
            </td>
            <td className=" pl-20">
              <DeleteOutlineOutlinedIcon />
            </td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div className="w-[334px] space-y-3 px-3 text-[#3D3D3D]">
        <h1 className=" text-[18px] font-bold ">Cart Totals</h1>
        <hr className="border-[#46A358]" />
        <p className="text-[14px] font-normal leading-4">Coupon Apply</p>
        <div className="flex pb-6">
          <input
            type="text"
            placeholder="Enter coupon code here..."
            className="h-10 w-[230px] rounded-l-md pl-[9px] outline-[#46A358]"
          />
          <button className="h-10 w-[102px] rounded-r-md border-hidden bg-[#46A358] text-[15px] font-bold text-white">
            Apply
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-normal leading-4">Subtotal</p>
          <p className=" text-[18px] font-semibold ">$2,683.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-normal leading-4">Coupon Discount</p>
          <p className=" text-[15px] font-normal ">(-) 00.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-normal leading-4">Shiping</p>
          <p className=" text-[18px] font-semibold ">$16.00</p>
        </div>
        <div className="flex items-center justify-end">
          <p className="text-[12px] font-normal leading-4 text-[#46A358]">
            View shipping charge
          </p>
        </div>
        <div className="flex items-center justify-between py-5">
          <p className="text-[16px] font-bold leading-4">Total</p>
          <p className=" text-[18px] font-bold leading-4 text-[#46A358]">
            $2,699.00
          </p>
        </div>
        <button className="h-10 w-[325px] rounded-md bg-[#46A358] text-[15px] font-bold leading-4 text-white ">
          <NavLink to="/checkout"> Proceed To Checkout</NavLink>
        </button>
        <div className="flex items-center justify-center py-3">
          <p className=" text-[15px] font-bold leading-4 text-[#46A358]">
            Continue Shopping
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
