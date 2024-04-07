import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import thank from "../../public/thankyou.png";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const AccountPassword = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    username: "",
    photo: "",
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
          <h1 className=" pb-2 text-[17px] font-bold leading-4 text-[#3D3D3D]">
            Personal Information
          </h1>

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
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Username*
              </label>
              <input
                type="text"
                id="state"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="h-10 w-80 rounded-lg border p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zip"
                className="block pb-2 text-sm font-medium text-gray-700"
              >
                Photo*
              </label>
              <div className="flex gap-3">
                <div
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.photo}
                  onChange={handleChange}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border p-3 text-[#46A358]"
                  required
                >
                  <InsertPhotoOutlinedIcon />
                </div>
                <button className="h-[40px] w-[98px] rounded-md bg-[#46A358] text-[14px] font-bold text-white">
                  Change
                </button>
                <button className="h-[40px] w-[98px] rounded-md text-[14px] font-bold text-[#3D3D3D]">
                  Remove
                </button>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block pb-2 text-sm font-medium text-gray-700"
                >
                  Current Password*
                </label>
                <input
                  type="password"
                  id="country"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="h-10 w-80 rounded-lg border pl-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block pb-2 text-sm font-medium text-gray-700"
                >
                  New Password*
                </label>
                <input
                  type="password"
                  id="city"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="h-10 w-80 rounded-lg border p-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="streetAddress"
                  className="block pb-2 text-sm font-medium text-gray-700"
                >
                  Confirm New Password*
                </label>
                <input
                  type="password"
                  id="streetAddress"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  className="h-10 w-80 rounded-lg border p-3"
                  required
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="my-7 h-[40px] w-[131px] rounded-md bg-[#46A358] font-bold text-white"
          >
            Save Change
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
        </div>
      </form>
    </div>
  );
};

export default AccountPassword;
