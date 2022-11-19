import React from "react";
import Card from "../Card/Card";

import "./flexbox.css";
import { productContext } from "../../context/productsContext";
import { useContext } from "react";
function Flexbox() {
  const data = useContext(productContext);
  console.log(data);
  return (
    <div className="d-flex flex-wrap FlexboxItems">
      {data &&
        data.map((i) => (
          <Card key={i._id} img={i.image} title={i.title} id={i._id}></Card>
        ))}
    </div>
    // </div>
  );
}

export default Flexbox;
