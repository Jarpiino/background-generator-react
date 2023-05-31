import "./App.css";
import { useState, useEffect, useRef } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Heading from "./components/Heading/Heading";
import RandomButton from "./components/RandomButton/RandomButton";

export default function App() {
  const bodyElement = useRef(".background");

  //set initial state
  const [color1, setColor1] = useState("#019ab5");
  const [color2, setColor2] = useState("#ff0000");
  const [bgGradientCss, setBgGradientCss] = useState("");

  // random hex generator
  const randomHexGenerator = () => {
    let hexNumber = (Math.random() * 0xfffff * 1000000).toString(16);
    console.log(`#${hexNumber.slice(0, 6)}`);
    // ?this works lol
    return `#${hexNumber.slice(0, 6)}`;
  };

  // generate random hex on random button click
  const changeToRandomColor = () => {
    setColor1(randomHexGenerator());
    setColor2(randomHexGenerator());
  };

  useEffect(() => {
    bodyElement.current.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    setBgGradientCss(bodyElement.current.style.background);
  }, [color1, color2, bgGradientCss]);

  return (
    <div
      ref={bodyElement}
      className={
        "background text-center flex justify-center flex-col items-center h-screen gap-10"
      }
    >
      <Heading bgGradientCss={bgGradientCss} />
      <div className="section flex flex-row gap-10 justify-center items-center">
        <ColorPicker color={color1} setColor={setColor1} />
        <ColorPicker color={color2} setColor={setColor2} />
        <RandomButton changeToRandomColor={changeToRandomColor} />
      </div>
    </div>
  );
}
