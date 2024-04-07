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

const AccountInput = () => {
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
          <button className="w-full rounded-lg bg-[#46A358] px-4 py-2 font-bold text-white">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInput;
