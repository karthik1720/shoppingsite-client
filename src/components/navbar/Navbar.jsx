import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import "./navbar.css";
import Line from "../Lines/Line";

// Material icons===============
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Auth from "../../pages/auth/Auth";
import { useNavigate } from "react-router-dom";

//END=========================================

function Navbar() {
  const [loadAuth, setLoadAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="NavbarContainer">
      <div className="NavbarSections">
        <img src={logo} alt="" className="Logo" />
      </div>
      <div className="NavbarSections">
        <div className="NavbarItems" onClick={() => navigate("/")}>
          Categories
        </div>

        <div className="NavbarItems" onClick={() => navigate("/products")}>
          All Products
        </div>

        <div className="NavbarItems" onClick={() => navigate("/")}>
          Featured
        </div>
      </div>
      <div className="NavbarSections">
        <SearchIcon sx={{ fontSize: 40 }} />
        <Line type="vertical" size="50%" />
        <div
          className=""
          onClick={() => {
            setLoadAuth(true);
          }}
        >
          <PersonIcon sx={{ fontSize: 40 }} />
        </div>

        <Line type="vertical" size="50%" />
        <div
          className=""
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
      {loadAuth && (
        <>
          <div
            className="Blocker"
            onClick={() => {
              setLoadAuth(false);
            }}
          ></div>
          <div className="AuthLoader">
            <Auth></Auth>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
