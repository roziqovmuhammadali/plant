import React from "react";
import Footer from "../components/Footer";
import AutoPlay from "../components_shop/AutoPlay";
import BasicTabs from "../components_shop/TabsCard";
import Navbar from "../components/Navbar";
import Article from "../components_shop/Article";
import NavLin from "../components_shop/NavLink";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <NavLin />
      <Article />
      <BasicTabs />
      <AutoPlay />
      <Footer />
    </div>
  );
};

export default Shop;
