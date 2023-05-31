import React from "react";

const RandomButton = (props) => {
  return (
    <button
      id="random"
      className="text-black rounded-md text-lg p-3 bg-white m-0"
      onClick={props.changeToRandomColor}
    >
      random
    </button>
  );
};

export default RandomButton;
