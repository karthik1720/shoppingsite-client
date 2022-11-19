import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import "./Navbar2.css";

import Auth from "../../pages/auth/Auth";
import { useNavigate } from "react-router-dom";
// Material icons===============
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
//END=========================================

function Navbar() {
  const [loadAuth, setLoadAuth] = useState(false);
  const navigate = useNavigate();

  /////RETURN ///////////////////////
  return (
    <div className="NavbarContainer">
      <div className="NavbarSections">
        <MoreVertOutlinedIcon className="NavbarIcons" />
        <img
          src={logo}
          alt=""
          className="NavbarLogo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="NavbarSections ">
        {/* <div className="NavbarItems" onClick={() => navigate("/")}>
          Categories
        </div> */}

        <div className="NavbarItems" onClick={() => navigate("/products")}>
          All Products
        </div>

        {/* <div className="NavbarItems" onClick={() => navigate("/")}>
          Featured
        </div> */}
      </div>

      <div className="NavbarSections">
        <LocalMallOutlinedIcon
          className="NavbarIcons"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/cart");
          }}
        />
        <PersonIcon
          className="NavbarIcons"
          onClick={() => {
            setLoadAuth(true);
          }}
        />
        {/* <div
          className=""
          
        >
          
        </div>

        <div
          className=""
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 40 }} />
        </div> */}
      </div>
      {loadAuth && (
        <div className="AuthLoaderWindow">
          <div
            className="Blocker"
            onClick={() => {
              setLoadAuth(false);
            }}
          ></div>
          <div className="AuthLoader">
            <Auth></Auth>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
