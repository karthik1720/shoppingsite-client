import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./product.css";
import Button1 from "../../components/button1/Button1";
function Product() {
  const { productid } = useParams();
  const [item, setItem] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    console.log("loading");
    axios.get(`/products/view/${productid}`).then((response) => {
      setData(response.data);
    });
    setLoading(false);
  }, [productid]);

  const [cartitem, setCartitem] = useState([]);

  const addToCart = async (e) => {
    const payload = {
      productid: productid,
      userid: localStorage.getItem("access-token"),
      productname: data.title,
      item: item,
    };
    console.log(payload);
    await axios.put(`/user/cart/additems`, payload);
  };

  return (
    <div className="ProductContainer">
      {loading ? (
        "Loading"
      ) : (
        <div className="ProductWrapper">
          <div className="Flex">
            <div className="ProductImgContainer">
              <img className="ProductImg" src={data.image} alt="" />
            </div>
            <div className="ProductPrc">
              <h1 className="ProductTitle">{data.title}</h1>
              <hr className="ProductHr" />
              <h1 className="Price">₹ {data.price}</h1>
              <div className="BuyButtons">
                <div className="AddToCart">
                  <Button1
                    stock={data.stock}
                    button={item}
                    setButton={setItem}
                  ></Button1>
                  <button className="AddToCartButton" onClick={addToCart}>
                    Add to cart
                  </button>
                </div>
                <button className="BuyButton">Buy now</button>
              </div>

              <h3 className="Stock">Only {data.stock} items left in stock</h3>
            </div>
          </div>
          <div className="ProductDetails">
            <h1 className="ProductDescriptionTitle">Description</h1>
            <p className="ProductDescription">{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
