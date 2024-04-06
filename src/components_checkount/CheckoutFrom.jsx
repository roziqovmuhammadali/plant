import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import pay from "../../public/image 16.svg";
import thank from "../../public/thankyou.png";
import images1 from "../../public/image  1.jpg";
import images2 from "../../public/image  2.jpg";
import images3 from "../../public/image  3.jpg";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    phoneCode: "+1", // Default phone code
    shipToDifferentAddress: false,
    orderNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex w-full px-[100px]">
        <div className=" w-[70%]">
          <h1 className=" pb-7 text-[17px] font-bold leading-4 text-[#3D3D3D]">
            Billing Address
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Country/Region*
              </label>
              <select
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country/Region"
                className="h-10 w-80 rounded-lg border pl-3"
                required
              >
                <option value="uz"></option>
                <option value="uz">Uzbekistan</option>
                <option value="rus">Russia</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Town/City*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Town/City"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="Street Address"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4 mt-4">
              <label
                htmlFor="streetAddress"
                className="block pb-2 text-sm font-medium text-gray-700"
              ></label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                onChange={handleChange}
                placeholder="Appartment, suite, unit, etc. (optional)"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                State*
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zip"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Zip*
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Phone Number*
              </label>
              <div className="flex">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="mr-2 h-10 w-20 rounded-lg border p-2"
                >
                  <option value="+1">+998</option>
                  <option value="+91">+91</option>
                  {/* Add more options as needed */}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="h-10 w-60 rounded-lg border p-3"
                  required
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="shipToDifferentAddress"
                name="shipToDifferentAddress"
                checked={formData.shipToDifferentAddress}
                onChange={handleChange}
                className="mr-2"
              />
              <label
                htmlFor="shipToDifferentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Ship to a different address?
              </label>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="orderNotes"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Order notes (optional)
              </label>
              <textarea
                id="orderNotes"
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
                placeholder="Order notes (optional)"
                className="w-[50%] rounded-lg border p-3"
                rows="4"
              />
            </div>
          </div>
        </div>
        <div className="w-[30%] space-y-3 ">
          <h1 className=" pb-7 text-[17px] font-bold leading-4 text-[#3D3D3D]">
            Your Order
          </h1>
          <div className=" container w-full pb-3">
            <div className=" flex w-full items-center justify-between pr-2 text-[16px] font-medium leading-4 text-[#3D3D3D]">
              <h2>Products</h2>
              <h2>Subtotal</h2>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between bg-[#FBFBFB] pr-2">
            <div className="flex items-center">
              <div className="h-[70px] w-[70px]"></div>
              <div>
                <span className=" text-[16px] font-medium text-[#3D3D3D]">
                  Barberton Daisy
                </span>
                <span className="block text-[14px] font-normal leading-4 text-[#A5A5A5]">
                  <span className="text-[13px]">SKU:</span> 1995751877966
                </span>
              </div>
            </div>
            <span className="text-[14px] font-normal">(x 2)</span>
            <span className="text-18px font-bold leading-4 text-[#46A358]">
              $238.00
            </span>
          </div>
          <div className="flex items-center justify-between bg-[#FBFBFB] pr-2">
            <div className="flex items-center">
              <div className="h-[70px] w-[70px]"></div>
              <div>
                <span className=" text-[16px] font-medium text-[#3D3D3D]">
                  Blushing Bromeliad{" "}
                </span>
                <span className="block text-[14px] font-normal leading-4 text-[#A5A5A5]">
                  <span className="text-[13px]">SKU:</span> 19957518757065
                </span>
              </div>
            </div>
            <span className="text-[14px] font-normal">(x 6)</span>
            <span className="text-18px font-bold leading-4 text-[#46A358]">
              $834.00
            </span>
          </div>
          <div className="flex items-center justify-between bg-[#FBFBFB] pr-2">
            <div className="flex items-center">
              <div className="h-[70px] w-[70px]"></div>
              <div>
                <span className=" text-[16px] font-medium text-[#3D3D3D]">
                  Aluminum Plant
                </span>
                <span className="block text-[14px] font-normal leading-4 text-[#A5A5A5]">
                  <span className="text-[13px]">SKU:</span> 1995751877786
                </span>
              </div>
            </div>
            <span className="text-[14px] font-normal">(x 9)</span>
            <span className="text-18px font-bold leading-4 text-[#46A358]">
              $1,611.00
            </span>
          </div>
          <div className="flex items-center justify-end py-1 pr-2">
            <span className="flex gap-1">
              <p className="text-[12px] font-normal leading-4">
                Have a coupon code?
              </p>
              <p className="text-[12px] font-normal leading-4 text-[#46A358]">
                {" "}
                Click here
              </p>
            </span>
          </div>

          <div className="flex items-center justify-end">
            <div className="w-[350px] pr-2">
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-normal leading-4">Subtotal</p>
                <p className=" text-[18px] font-medium ">$2,683.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-normal leading-4">
                  Coupon Discount
                </p>
                <p className=" text-[15px] font-normal ">(-) 00.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-normal leading-4">Shiping</p>
                <p className=" text-[18px] font-medium ">$16.00</p>
              </div>
              <div className="flex items-center justify-end">
                <p className="py-1 text-[12px] font-normal leading-4 text-[#46A358]">
                  View shipping charge
                </p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="text-[17px] font-bold leading-4">Total</p>
                <p className=" text-[18px] font-bold leading-4 text-[#46A358]">
                  $2,699.00
                </p>
              </div>
              <div className=" mb-9 mt-4 space-y-3">
                <p className=" py-4 text-[17px] font-bold leading-4 text-[#3D3D3D]">
                  Payment Method
                </p>
                <div className="flex items-center gap-3  rounded-md border border-[#EAEAEA] p-[10px]">
                  <input type="radio" />
                  <img src={pay} alt="logo" />
                </div>
                <div className="flex items-center gap-3  rounded-md border border-[#EAEAEA] p-[10px]">
                  <input type="radio" />
                  <p>Dorect bank transfer</p>
                </div>
                <div className="flex items-center gap-3  rounded-md border border-[#EAEAEA] p-[10px]">
                  <input type="radio" />
                  <p>Cash on delivery</p>
                </div>
              </div>
              <div className="col-span-2">
                <div>
                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        maxWidth: 578,
                        borderRadius: "md",

                        boxShadow: "lg",
                      }}
                    >
                      <ModalClose variant="plain" sx={{ m: 1 }} />

                      <Typography id="modal-desc" textColor="text.tertiary">
                        <div className="h-[470px] w-[568px]">
                          <div className="mb-2 flex w-full flex-col items-center justify-center bg-[#46A3580F] py-5">
                            <img src={thank} alt="logo" />
                            <p className=" text-[14px] font-normal text-[#727272]">
                              Your order has been received
                            </p>
                          </div>
                          <table className=" w-full">
                            <thead>
                              <tr>
                                <th className="border-r-2">
                                  <span className="block text-[12px] font-normal text-[#727272]">
                                    Order Number
                                  </span>
                                  <span className=" text-[13px] font-bold">
                                    19586687
                                  </span>
                                </th>
                                <th className="border-r-2">
                                  <span className="block text-[12px] font-normal text-[#727272]">
                                    Date
                                  </span>
                                  <span className=" text-[13px] font-bold">
                                    15 Sep, 2021
                                  </span>
                                </th>
                                <th className="border-r-2">
                                  <span className="block text-[12px] font-normal text-[#727272]">
                                    Total
                                  </span>
                                  <span className=" text-[13px] font-bold">
                                    2,699.00
                                  </span>
                                </th>
                                <th className="border-r-2">
                                  <span className="block text-[12px] font-normal text-[#727272]">
                                    Payment Method
                                  </span>
                                  <span className=" text-[13px] font-bold">
                                    Cash on delivery
                                  </span>
                                </th>
                              </tr>
                            </thead>
                          </table>
                          <hr className="mt-3" />
                          <h1 className="px-8 pb-3 pt-3 text-[13px] font-bold">
                            Order Details
                          </h1>
                          <div className=" flex w-full items-center justify-between px-8 text-[13px] font-bold">
                            <h1>Products</h1>
                            <h1 className="pl-24">Qty</h1>
                            <h1>Subtotal</h1>
                          </div>
                          <hr />
                          <div className="mb-2 flex items-center justify-between bg-[#FBFBFB] px-2">
                            <div className="flex items-center">
                              <div className="h-[65px] w-[65px]">
                                <img src={images1} alt="" />
                              </div>
                              <div>
                                <span className=" text-[14px] font-medium text-[#3D3D3D]">
                                  Barberton Daisy
                                </span>
                                <span className="block text-[12px] font-normal leading-4 text-[#A5A5A5]">
                                  <span className="text-[11px]">SKU:</span>{" "}
                                  1995751877966
                                </span>
                              </div>
                            </div>
                            <span className="text-[14px] font-normal">
                              (x 2)
                            </span>
                            <span className="text-[15px] font-bold leading-4 text-[#46A358]">
                              $238.00
                            </span>
                          </div>
                          <div className="mb-2 mt-2 flex items-center justify-between bg-[#FBFBFB] pr-2">
                            <div className="flex items-center">
                              <div className="h-[70px] w-[70px]">
                                <img src={images2} alt="" />
                              </div>
                              <div>
                                <span className=" text-[16px] font-medium text-[#3D3D3D]">
                                  Blushing Bromeliad{" "}
                                </span>
                                <span className="block text-[14px] font-normal leading-4 text-[#A5A5A5]">
                                  <span className="text-[13px]">SKU:</span>{" "}
                                  19957518757065
                                </span>
                              </div>
                            </div>
                            <span className="text-[14px] font-normal">
                              (x 6)
                            </span>
                            <span className="text-18px font-bold leading-4 text-[#46A358]">
                              $834.00
                            </span>
                          </div>
                          <div className="mb-2 flex items-center justify-between bg-[#FBFBFB] pr-2">
                            <div className="flex items-center">
                              <div className="h-[70px] w-[70px]">
                                <img src={images3} alt="" />
                              </div>
                              <div>
                                <span className=" text-[16px] font-medium text-[#3D3D3D]">
                                  Aluminum Plant
                                </span>
                                <span className="block text-[14px] font-normal leading-4 text-[#A5A5A5]">
                                  <span className="text-[13px]">SKU:</span>
                                  1995751877786
                                </span>
                              </div>
                            </div>
                            <span className="text-[14px] font-normal">
                              (x 9)
                            </span>
                            <span className="text-18px font-bold leading-4 text-[#46A358]">
                              $1,611.00
                            </span>
                          </div>
                        </div>
                      </Typography>
                    </Sheet>
                  </Modal>
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full rounded-lg bg-[#46A358] px-4 py-2 font-bold text-white"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
