import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import thank from "../../public/thankyou.png";

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
      <form onSubmit={handleSubmit} className="flex w-full px-[80px]">
        <div>
          <div className="flex w-full items-center justify-between">
            <div className=" w-[100%]">
              <h1 className=" pb-2 text-[17px] font-bold leading-4 text-[#3D3D3D]">
                Billing Address
              </h1>
              <p className="pb-7 text-[13px] text-[#727272]">
                The following addresses will be used on the checkout page by
                default.
              </p>
            </div>
            <p className="text-[14px] font-medium text-[#46A358]">Add</p>
          </div>

          <div className="grid grid-cols-2 justify-between gap-6">
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
          </div>
          <button
            onClick={() => setOpen(true)}
            className="my-7 h-[40px] w-[131px] rounded-md bg-[#46A358] font-bold text-white"
          >
            Save Address
          </button>
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
                <div className=" w-[468px]">
                  <div className=" flex w-full flex-col items-center justify-center bg-[#46A3580F] py-5">
                    <img src={thank} alt="logo" />
                    <p className=" mt-4 text-[16px] font-bold text-[#727272]">
                      Thank you very much
                    </p>
                  </div>
                </div>
              </Typography>
            </Sheet>
          </Modal>
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-[16px] font-medium text-[#3D3D3D]">
                Shipping Address
              </h1>
              <span className="flex gap-4">
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
                    Same as billing address
                  </label>
                </div>
                <p className="text-[14px] font-medium text-[#46A358]">Add</p>
              </span>
            </div>
            <p className="text-[12px] font-normal text-[#727272]">
              You have not set up this type of address yet.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountInput;
