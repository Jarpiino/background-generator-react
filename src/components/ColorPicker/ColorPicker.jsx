import React from "react";
const ColorPicker = (props) => {
  let setColor = props.setColor;
  let color = props.color;

  return (
    <input
      type="color"
      className="color-picker"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ColorPicker;
