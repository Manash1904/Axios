import React from "react";
import { connect } from "react-redux";
import { incrementBy7 } from "../data/actions/actionCreators";

const Counter7 = (props) => {
  const onClick = () => {
    props.incrementBy7();
  };

  return (
    <>
      <button onClick={onClick}>Counter7 -- {props.counter7}</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter7: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementBy7: () => dispatch(incrementBy7()),
    /* incrementBy3: () => dispatch({
        type: types.INCREMENT_BY_3
    }) */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter7);
