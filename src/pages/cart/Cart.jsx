import React, { useEffect } from "react";
import "./cart.css";
import axios from "axios";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Checkout from "../../components/checkout/Checkout";

function Cart() {
  // const navigate = useNavigate();

  const [cartItem, setCartItem] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [countDown, setCountDown] = useState(3);

  // useEffect(() => {
  //   let timerId = null;
  //   if (showCheckout) {
  //     timerId = setInterval(() => {
  //       setCountDown((t) => {
  //         if (t === 0) {
  //           clearInterval(timerId);
  //           setShowCheckout(false);
  //         }
  //         return t - 1;
  //       });
  //     }, 1000);
  //   }
  //   return () => {
  //     setCountDown(3);
  //     clearInterval(timerId);
  //   };
  // }, [showCheckout]);

  const handleCheckout = () => {
    console.log("clicked");
    setShowCheckout(true);
    let timerId = null;
    timerId = setInterval(() => {
      setCountDown((t) => {
        if (t === 0) {
          clearInterval(timerId);
          setShowCheckout(false);
          setCountDown(3);
        }
        return t - 1;
      });
    }, 1000);
  };
  console.log(countDown);

  const [price, setPrice] = useState({
    totalPrice: null,
    discount: null,
    shippingCharge: null,
    finalAmount: null,
  });

  const handleRemove = async (event) => {
    try {
      console.log("called");
      const payload2 = {
        userid: localStorage.getItem("access-token"),
      };
      const id = event.target.name;
      console.log(id);
      await axios
        .put(`/user/cart/deleteItems/${id}`, payload2)
        .then((res) => {});
      reFetch();
    } catch (error) {}
  };

  useEffect(() => {
    const payload = {
      userid: localStorage.getItem("access-token"),
    };

    axios.post("user/cart/viewitems", payload).then((response) => {
      setCartItem(response.data);
      handleAmount(response.data);
    });
  }, []);

  const reFetch = () => {
    const payload = {
      userid: localStorage.getItem("access-token"),
    };

    axios.post("user/cart/viewitems", payload).then((response) => {
      setCartItem(response.data);
      handleAmount(response.data);
    });
  };

  // async function getData() {
  //   const payload = {
  //     userid: localStorage.getItem("access-token"),
  //   };

  //   await axios.post("user/cart/viewitems", payload).then((response) => {
  //     setCartItem(response.data);
  //     handleAmount(response.data);
  //   });
  // }

  const handleAmount = async (Data) => {
    let totalPrice = Data.reduce((sum, current, index) => {
      return sum + current.price * current.count;
    }, 0);

    console.log(totalPrice);
    const discount = Math.floor(totalPrice / 5);
    const shippingCharge = 3;
    const finalAmount = totalPrice - discount + shippingCharge;
    setPrice({ totalPrice, discount, shippingCharge, finalAmount });
  };

  if (cartItem <= 0) {
    return (
      <div className="CartEmptyContainer">
        <div className="CartEmptyWrapper">
          <h1 className="CartEmptyH1">Your cart is currently empty.</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="CartContainer">
      <div className="CartWrapper">
        <div className="CartItemsWrapper ">
          {cartItem.map((i) => (
            <div className="cartItemBox" key={i.title}>
              <img src={i.image} alt="" className="CartItemImg" />
              <div className="CartItemDetails w-100 ">
                <h4 className="CartItemName m-0">
                  {i.title.slice(0, 40)}
                  {i.title.length > 40 ? "..." : ""}
                </h4>
                <p className="CartItemPrice m-0">${i.price.toFixed(2)}</p>
                <p className="CartItemQty m-0"> Qty: {i.count}</p>
                <div className="CartItemRemove d-flex align-items-center w-100">
                  <button
                    className="CartItemRemoveButton"
                    name={i._id}
                    onClick={handleRemove}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="CartCheckoutWrapper w-100">
          <div className="CartCheckoutSummary">
            <h4 className="CartCheckoutTitle">Summary</h4>
            <div className="CartCheckoutItem">
              <p className="CartCheckoutH">Total MRP</p>
              <span type="text" className="">
                + ${price.totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="CartCheckoutItem">
              <p className="CartCheckoutH">Shipping Charges</p>
              <span type="text" className="">
                + ${price.shippingCharge.toFixed(2)}
              </span>
            </div>
            <div className="CartCheckoutItem">
              <p className="CartCheckoutH">Bag discount</p>
              <span type="text" className="">
                - ${price.discount.toFixed(2)} (5%)
              </span>
            </div>

            <hr />
            <div className="CartCheckoutItem">
              <h4 className="CartCheckoutTitle">Final amount</h4>
              <span type="text" className="">
                ${price.finalAmount.toFixed(2)}
              </span>
            </div>
            <button onClick={handleCheckout} className="ProceedToPay w-100">
              Place Order
            </button>
          </div>
        </div>
      </div>
      {showCheckout && (
        <div className="CheckoutLoaderWindow">
          <div className="CheckoutBlocker"></div>
          <div className="CheckoutLoader">
            <Checkout count={countDown} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
