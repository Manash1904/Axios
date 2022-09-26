import React from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import Loader from "./Loader";

const Cat3 = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/sampleJSONs/categories/car3.json")
      .then((data) => {
        setIsLoad(false);
        setProducts(data.data.category3);
      })
      .catch((err) => {
        console.log("Cat3 err", err);
      });
  }, []);

  return (
    <div>
      {isLoad ? (
        <Loader>Category 3 loading...</Loader>
      ) : (
        <>
          <h6>Category 3</h6>
          <ProductDetail products={products} />
        </>
      )}
    </div>
  );
};

export default Cat3;
