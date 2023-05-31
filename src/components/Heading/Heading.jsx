import React from "react";

const Heading = (props) => {
  return (
    <div className="section flex justify-center flex-col items-center gap-8">
      <h1 className="text-9xl font-bold leading-tight">
        BACKGROUND
        <br />
        GENERATOR
      </h1>
      <h2 className="text-4xl">background: {props.bgGradientCss};</h2>
    </div>
  );
};

export default Heading;
