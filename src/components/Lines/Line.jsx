import React from "react";

function Line({ type, size }) {
  if (type === "vertical") {
    return (
      <div
        style={{
          display: "flex",
          height: size,
          width: "2px",
          backgroundColor: "#acacac",
        }}
      />
    );
  }
  return <hr />;
}

export default Line;
