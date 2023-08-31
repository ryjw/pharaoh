import nounPyramid from "../assets/noun-pyramid.png";

export default function Clicker({ grainGetter, grainSetter }) {
  function handleClick() {
    const grain = grainGetter + 1;
    grainSetter(grain);
  }
  return (
    <img
      id="pyramid-click"
      onClick={handleClick}
      src={nounPyramid}
      alt="a clickable pyramid"
    />
  );
}
