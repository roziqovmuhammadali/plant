import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import CheckoutShop from "./pages/CheckoutShop";
import Menu from "./pages/MyAccount";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop2" element={<Shop2 />} />
          <Route path="/checkout" element={<CheckoutShop />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
