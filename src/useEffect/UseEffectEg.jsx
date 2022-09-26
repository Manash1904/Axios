import React from "react";

const UmMountComp = (props) => {
  const [visible, setVisible] = React.useState(true);
  const toggleState = () => {
    const currentVisible = visible;
    setVisible(!currentVisible);
  };
  return (
    <div>
      <button onClick={toggleState}>Show/Hide</button>
      {console.log(props)}
      {visible && props.children}
    </div>
  );
};
const UseEffectEg = () => {
  const [counter, setCounter] = React.useState(0);
  const incrementHandler = () => {
    setCounter(counter + 1);
  };

 
  const mountCallBackFn = () => {
    console.log("Mount Call");

    const unmountCallback = () => {
      console.log("UnMount");
    };

    return unmountCallback;
  };

  React.useEffect(mountCallBackFn, []); // will be called once --- Mounting --- componentDidMount

  const callbackFn = () => {
    console.log("CallBack", counter);
  };

  React.useEffect(callbackFn, [counter]); // updation phase --- componentDidUpdate

  return (
    <div>
      <h5>Counter</h5>
      <p>{counter}</p>
      <button onClick={incrementHandler}>Inc</button>
      <hr />
     
    </div>
  );
};

const Abc = () => {
  return (
    <UmMountComp>
      <UseEffectEg />
    </UmMountComp>
  );
};

export default Abc;
