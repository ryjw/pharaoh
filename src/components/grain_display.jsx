import { Icon } from "@iconify/react";

export default function GrainDisplay({ grainGetter }) {
  return (
    <>
      <Icon icon="streamline:food-wheat-cook-plant-bread-gluten-grain-cooking-nutrition-food-wheat" />
      <span> {grainGetter} </span>
    </>
  );
}
