import React from "react";
import "./banner.css";
import img1 from "../../../assets/offer1.webp";
import img2 from "../../../assets/offer2.webp";
function ExBanner() {
  return (
    <div className="BannerContainer">
      <img src={img1} alt="img1" className="BannerItems Item1"></img>
      <img src={img2} alt="img1" className="BannerItems Item1"></img>
    </div>
  );
}

export default ExBanner;
