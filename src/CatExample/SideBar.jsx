import React from "react";
import "./styles.css";

const SideBar = () => {
  const categories = ["category1", "category2", "category3"];

  return (
    <div className="sideBar">
      <ul>
        {categories.map((ele, i) => (
          <li key={i}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
