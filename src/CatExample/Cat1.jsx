import React from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import Loader from "./Loader";
import Error from "./Error";

//const Loader = () => <div>Loading...</div>;

const Cat1 = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/sampleJSONs/categories/cat1.json")
      .then((data) => {
        setTimeout(() => {
          setIsLoad(false);
          setProducts(data.data.category1);
        }, 5000);
      })
      .catch((err) => {
        console.log("Cat1 err", err);
        setIsError(true);
      });
  }, []);

  const loadUI = () => {
    if (isLoad) {
      return <Loader>Category 1 loading...</Loader>;
    }
    if (isError) {
      return <Error category={"category1"} />;
    }

    return (
      <>
        <h6>Category 1</h6>
        <ProductDetail products={products} />
      </>
    );
  };

  return <div>{loadUI()}</div>;
};

export default Cat1;
