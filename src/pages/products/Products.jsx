import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Flexbox from "../../components/flexbox/Flexbox";
import "./products.css";
import axios from "axios";
import { productContext } from "../../context/productsContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/Card/Card";

/////////////////MUI /////////////////////////
import SearchIcon from "@mui/icons-material/Search";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/products/view").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="ProductsContainer">
      <Sidebar></Sidebar>

      <div className="ProductsWrapper ">
        <div className="ProductsSearchContainer">
          {/* <div className="ProductsSearchbar">
            <SearchIcon className="SearchIcon" />
            <input type="text" className="ProductsSearchbarInput" />
          </div> */}
          <span className="ProductsSearchResult"></span>
          <div className="ProductsSort"></div>
        </div>
        <div className="ProductsList d-flex flex-wrap">
          {/* <productContext.Provider value={data}> */}
          {data &&
            data.map((i) => (
              <Card
                key={i._id}
                img={i.image}
                title={i.title}
                id={i._id}
                data={i}
              ></Card>
            ))}
          {/* </productContext.Provider> */}
        </div>
      </div>
    </div>
  );
}
{
  /* <productContext.Provider value={data}>
          <Flexbox />
        </productContext.Provider> */
}

export default Products;
