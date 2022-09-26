import React from "react";

/**
 * Tables
 * 2, 3
 */

export const TwoTable = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((ele, i) => {
        return (
          <div key={i}>
            2 * {ele} = {2 * ele}
          </div>
        );
      })}
    </div>
  );
};

export const ThreeTable = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, i) => {
        return (
          <div key={i}>
            3 * {ele} = {3 * ele}
          </div>
        );
      })}
    </div>
  );
};

// Definition of HOC
const TableHOC = (WrappedComp, multiplier) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const aa = (
    <div>
      {arr.map((ele, i) => {
        return (
          <div key={i}>
            {multiplier} * {ele} = {multiplier * ele}
          </div>
        );
      })}
    </div>
  );

  return () => {
    return (
      <div>
        <WrappedComp tableJsx={aa} />
      </div>
    );
  };
};

/* const TableTwoWithHOC = (props) => {
  return (
    <div>
      {props.tableArr.map((ele, i) => {
        return (
          <div key={i}>
            2 * {ele} = {2 * ele}
          </div>
        );
      })}
    </div>
  );
}; */

/* const TableThreeWithHOC = (props) => {
  return (
    <div>
      {props.tableArr.map((ele, i) => {
        return (
          <div key={i}>
            3 * {ele} = {3 * ele}
          </div>
        );
      })}
    </div>
  );
}; */

const TableTwoWithHOC = (props) => {
  return <div>{props.tableJsx}</div>;
};

const TableThreeWithHOC = (props) => {
  return <div>{props.tableJsx}</div>;
};

//Application of HOC
export const HOCEg1 = TableHOC(TableTwoWithHOC, 2);
export const HOCEg2 = TableHOC(TableThreeWithHOC, 3);

const TableHOC1 = (WrappedComp) => (multiplier) => {
  return () => {
    console.log("HOC1:: ", multiplier);
    return (
      <div>
        <WrappedComp />
      </div>
    );
  };
};

const TableTwoWithHOC1 = () => {
  return <div>TableTwoWithHOC1</div>;
};

const TableThreeWithHOC1 = () => {
  return <div>TableThreeWithHOC1</div>;
};

//export const AB = TableHOC1(TableTwoWithHOC1)(2);

const A = TableHOC1(TableTwoWithHOC1);
export const AB = A(2);

export const AB1 = TableHOC1(TableThreeWithHOC1)(3);

// App.jsx ---> HOC1 ---> HOC2 ---> Sample [props flowing]

const HOC1 = (WrappedComp) => {
  return (props) => {
    console.log("HOC1: props ", props);
    return (
      <div>
        HOC1
        <WrappedComp {...props} pp1={"pp1"} />
      </div>
    );
  };
};

const HOC2 = (WrappedComp) => {
  return (props) => {
    console.log("HOC2: props", props);
    return (
      <div>
        HOC2
        <WrappedComp {...props} pp2={"pp2"} />
      </div>
    );
  };
};

const Sample = (props) => {
  console.log("Sample: props", props);
  return <div>Sample</div>;
};

/* const AD = HOC2(Sample);
export const SampleWithHOC = HOC1(AD); */

export const SampleWithHOC = HOC1(HOC2(Sample));
