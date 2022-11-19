import React from "react";
import "./sidebar.css";
function Sidebar() {
  //////////DUMMY VALUES /////////////////
  const category = [
    {
      name: "Pants",
    },
    {
      name: "Jeans",
    },
    {
      name: "Shirts",
    },
  ];

  return (
    <aside className="SidebarContainer">
      <div className="SidebarSections">
        <h4 className="SidebarHeading">Filter</h4>
      </div>
      <div className="SidebarSections">
        <h4 className="SidebarHeading">Categories</h4>
        {category.map((v, i) => (
          <div className="SidebarCheckboxItems">
            <input
              type="checkbox"
              id={v.name}
              className="SidebarCheckbox"
            ></input>
            <label htmlFor={v.name} className="SidebarLabels">
              {v.name}
            </label>
          </div>
        ))}
      </div>
      <div className="SidebarSections">
        <h4 className="SidebarHeading">Price range</h4>
        <div className="SidebarPriceRange">
          <input
            type="text"
            placeholder="Min"
            className="SidebarPriceRangeInput"
          />
          <input
            type="text"
            placeholder="Max"
            className="SidebarPriceRangeInput"
          />
        </div>
        <button className="SidebarPriceRangeButton">Set price</button>
      </div>
    </aside>
  );
}

export default Sidebar;
