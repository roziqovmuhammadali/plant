import React, { useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

import logo from "../../public/Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { CgLogIn } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setOpen(true);
  };

  const openRegisterModal = () => {
    setIsLoginOpen(false);
    setOpen(true);
  };

  const [count, setCount] = useState(false);

  const handleSubmit = () => {
    setCount(true);
  };

  const location = useLocation();
  return (
    <div>
      {" "}
      <div className="flex h-[60px] w-full items-center justify-between border-b-2  px-[80px]">
        <span>
          <img src={logo} alt="logo" />
        </span>
        <ul className="flex h-[60px] w-[300px] items-center justify-between text-[#3D3D3D]">
          <li
            className={`border-b-[3px] py-4 text-[#46A358] ${
              location.pathname === "/"
                ? " border-[#46A358] font-bold"
                : "border-[#fff]"
            }`}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={`border-b-[3px] py-4 text-[#46A358] ${
              location.pathname === "/shop"
                ? " border-[#46A358] font-bold"
                : "border-[#fff]"
            }`}
          >
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="border-[#46A358] text-[#46A358]">Plant Care</li>
          <li className="border-[#46A358] text-[#46A358]">Blogs</li>
        </ul>
        <div className="flex gap-5">
          <span className={`flex items-center justify-between gap-4`}>
            <SearchIcon />
            <NavLink to="/shop2">
              <LocalGroceryStoreIcon />
            </NavLink>
          </span>
          <button
            type="submit"
            onClick={() => setOpen(true)}
            className={`flex h-[35px] w-[100px] items-center justify-center gap-2 rounded-md bg-[#46A358] font-medium text-white  
              
            `}
          >
            <span>
              <CgLogIn />
            </span>
            <span>Login</span>
          </button>

          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
              <DialogTitle>{isLoginOpen ? "Login" : "Register"}</DialogTitle>
              <DialogContent>
                <form>
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input autoFocus required type="email" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input required type="password" />
                    </FormControl>
                    {!isLoginOpen && (
                      <FormControl>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input required type="password" />
                      </FormControl>
                    )}
                    <Button type="submit">
                      {isLoginOpen ? "Login" : "Register"}
                    </Button>
                    <Button
                      variant="text"
                      onClick={() => setIsLoginOpen(!isLoginOpen)}
                    >
                      {isLoginOpen
                        ? "Don't have an account? Register here."
                        : "Already have an account? Login here."}
                    </Button>
                  </Stack>
                </form>
              </DialogContent>
            </ModalDialog>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
