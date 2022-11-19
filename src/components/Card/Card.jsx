import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

//////////////// MATERIAL ICONS ////////////////////////
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

//////////////// DUMMY VALUES ////////////////////////////

//////////////////// END //////////////////////////////////////

function Card({ data }) {
  const rating = data.rating.rate;
  const navigate = useNavigate();
  console.log(data);
  ////////////VARIABLES ///////////////////////////////////
  const stars = [];

  //////////RATING CALCULATOR ///////////////////////////////
  const ratingCalculator = () => {
    let index = 0;
    if (rating % 1 !== 0) {
      stars.push(<StarHalfIcon className="CardRatingStarIcon" key={index} />);
      index = 1;
    }
    for (; index < 5; index++) {
      if (index < rating)
        stars.unshift(<StarIcon className="CardRatingStarIcon" key={index} />);
      else
        stars.push(
          <StarOutlineIcon className="CardRatingStarIconWhite" key={index} />
        );
    }
  };
  ratingCalculator();

  // const title = data.title;
  /////////////////////END //////////////////////////////////////////
  return (
    <div className="CardContainer">
      <img
        src={data.image}
        className="CardImg"
        alt="..."
        onClick={() => {
          navigate("/products/" + data._id);
        }}
      />
      <div className="CardDet">
        <h4 className="CardTitle">
          {data.title.slice(0, 25)}
          {data.title.length > 25 ? "..." : ""}
        </h4>
        <p className="CardRating">
          {stars} {`(${data.rating.count})`}
        </p>
        <div className="CardPricingSection">
          <div className="CardPrice">
            <span className="CardPriceTitle">Price</span>
            <h3 className="CardPriceInRupees">₹{data.price}</h3>
          </div>
          <button className="CardAddToCartButton">Add to cart</button>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default Card;
