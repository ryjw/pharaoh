export default function BuyButton({
  producer,
  setProducers,
  debens,
  setDebens,
}) {
  function buy() {
    setDebens(() => debens - producer.cost);
    setProducers((prevProducers) => {
      return prevProducers.map((prod) => {
        if (producer.id === prod.id) {
          const owned = prod.owned;
          return { ...prod, owned: owned + 1 };
        } else {
          return prod;
        }
      });
    });
  }
  return producer.cost <= debens ? (
    <span>
      <button onClick={buy}>
        {producer.buyType} {producer.name} for {producer.cost} debens
      </button>
    </span>
  ) : (
    <></>
  );
}
