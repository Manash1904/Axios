import React from "react";
import Counter7 from "./Counter7";
import Counter4 from "./Counter4";
import Counter5 from "./Counter5";
import { Provider } from "react-redux";
import store from "../data/store";

const Main = () => {
  return (
    <Provider store={store}>
      <Counter7 />
      <Counter4 />
      <Counter5 />
    </Provider>
  );
};

export default Main;
