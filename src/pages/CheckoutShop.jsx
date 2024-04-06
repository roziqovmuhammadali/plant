import React from "react";
import Navbar from "../components/Navbar";
import NavLinkCheckout from "../components_checkount/NavLinkCheckount";
import CheckoutForm from "../components_checkount/CheckoutFrom";
import Footer from "../components/Footer";

const CheckoutShop = () => {
  return (
    <div className="w-full">
      <Navbar />
      <NavLinkCheckout />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default CheckoutShop;
