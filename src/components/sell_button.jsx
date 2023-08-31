export default function SellButton({
  grainGetter,
  grainSetter,
  debensSetter,
  debensGetter,
  grainPriceGetter,
}) {
  function sell() {
    debensSetter(() => debensGetter + grainPriceGetter * grainGetter);
    grainSetter(0);
  }
  return grainGetter ? (
    <span>
      <button size="xs" onClick={sell} id="sell">
        Sell grain for {grainPriceGetter * grainGetter} debens
      </button>
    </span>
  ) : (
    <></>
  );
}
