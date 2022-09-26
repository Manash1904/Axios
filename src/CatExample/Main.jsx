import React from "react";
import SideBar from "./SideBar";
import ProductsList from "./ProductsList";

const Main = () => {
  return (
    <div>
      <h4>Shopping App</h4>
      <div style={{ display: "flex" }}>
        <SideBar />
        <ProductsList />
      </div>
    </div>
  );
};

export default Main;
