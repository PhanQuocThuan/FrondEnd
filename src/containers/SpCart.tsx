import React from "react";
import "./css/Body.css";
import Cart from "../component/Cart";

const SpCart = () => {
  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>Giỏ hàng</h2>
      </div>
      <Cart />
    </div>
  );
};

export default SpCart;
