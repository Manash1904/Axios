import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBy5 } from "../data/actions/actionCreators";

const Counter5 = () => {
  const dispatch = useDispatch();
  const counter5 = useSelector((state) => {
    console.log("Counter5: ", state);
    return state.counter;
  });

  const onClick = () => {
    dispatch(incrementBy5());
  };

  return (
    <>
      <button onClick={onClick}>Counter5 --- {counter5}</button>
    </>
  );
};

export default Counter5;
