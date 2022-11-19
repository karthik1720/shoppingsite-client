import React from "react";
import "./button1.css";

function Button1({ stock, button, setButton }) {
  // const [data, setData] = useState(0);
  const handleClick = (e) => {
    if (e.target.name === "leftClick" && button > 0) setButton(button - 1);
    if (e.target.name === "rightClick" && button < stock) setButton(button + 1);
  };
  return (
    <div className="Button1Container">
      <button name="leftClick" onClick={handleClick} className="Button1Arrow">
        {"<"}
      </button>
      <input
        value={button}
        onChange={(e) => {
          setButton();
        }}
        type="text"
        className="Button1TextArea"
      />
      <button name="rightClick" onClick={handleClick} className="Button1Arrow">
        {">"}
      </button>
    </div>
  );
}

export default Button1;
