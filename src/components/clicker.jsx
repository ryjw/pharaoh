import { useEffect, useState } from "react";
import nounPyramid from "../assets/noun-pyramid.png";

export default function Clicker({ grainGetter, grainSetter }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    const grain = grainGetter + 1;
    grainSetter(grain);
    setIsClicked(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsClicked(false), 100);
    return () => clearTimeout(timer);
  }, [isClicked]);

  return (
    <img
      className={`pyramid-click ${isClicked ? "shrunk" : ""}`}
      onClick={handleClick}
      src={nounPyramid}
      alt="a clickable pyramid"
    />
  );
}
