import React from "react";
import Cat1 from "./Cat1";
import Cat2 from "./Cat2";
import Cat3 from "./Cat3";

import "./styles.css";

const ProductsList = () => {
  return (
    <div className="productsList">
      <Cat1 />
      <Cat2 />
      <Cat3 />
    </div>
  );
};

export default ProductsList;
