import React from "react";
import { useEffect } from "react";
import Ad from "../../components/Ad/Ad";
import Flexbox from "../../components/flexbox/Flexbox";
import Carosel from "./Carosel/Carosel";
import ExBanner from "./exclusiveBanner/ExBanner";
import axios from "axios";
import "./home.css";
import { useState } from "react";

import Card from "../../components/Card/Card";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/products/featured").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="HomeContainer">
      <div className="HomeWrapper">
        {/* <h1>Welcome</h1> */}
        <Carosel />
        <ExBanner />
        <div className="Title">
          <hr className="Hr" />
          <h1 className="H1Title">Top Rated Products</h1>
          <hr className="Hr" />
        </div>
        <div className="ProductsList d-flex flex-wrap">
          {/* <productContext.Provider value={data}> */}
          {data && data.map((i) => <Card key={i._id} data={i}></Card>)}
          {/* </productContext.Provider> */}
        </div>
        <div className="Title">
          <hr className="Hr" />
          <h1 className="H1Title">Shop by category</h1>
          <hr className="Hr" />
        </div>
        <Flexbox />
        <Ad />
      </div>
    </div>
  );
}

export default Home;
