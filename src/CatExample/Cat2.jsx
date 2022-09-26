import React from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import Loader from "./Loader";

const Cat2 = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/sampleJSONs/categories/cat2.json")
      .then((data) => {
        setIsLoad(false);
        setProducts(data.data.category2);
      })
      .catch((err) => {
        console.log("Cat2 err", err);
      });
  }, []);

  return (
    <div>
      {isLoad ? (
        <Loader>Category2 loading...</Loader>
      ) : (
        <>
          <h6>Category 2</h6>
          <ProductDetail products={products} />
        </>
      )}
    </div>
  );
};

export default Cat2;
