import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBy4 } from "../data/actions/actionCreators";

const Counter4 = () => {
  const dispatch = useDispatch();
  const counter4 = useSelector((state) => {
    console.log("Counter4: ", state);
    return state.counter;
  });

  const onClick = () => {
    dispatch(incrementBy4());
  };

  return (
    <>
      <button onClick={onClick}>Counter4 --- {counter4}</button>
    </>
  );
};

export default Counter4;
