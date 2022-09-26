import React from "react";

const ProductDetail = (props) => {
  return (
    <div>
      {props.products.map((ele, i) => {
        return (
          <p key={i}>
            <div>{ele.name}</div>
            <div>{ele.price}</div>
          </p>
        );
      })}
    </div>
  );
};

export default ProductDetail;
