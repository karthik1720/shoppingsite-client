import React from "react";
import "./checkout.css";
function Checkout({ count }) {
  return (
    <div className="CheckoutContainer">
      <h5>Order placed. Thanks for shopping</h5>
      <span>Closing in {count}</span>
    </div>
  );
}

export default Checkout;
