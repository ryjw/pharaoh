export default function BuyButton({
  id,
  producers,
  setProducers,
  debens,
  setDebens,
}) {
  const producer = producers.filter((producer) => producer.id === id)[0];
  function buy() {
    setDebens(() => debens - producer.cost);
    setProducers((prevProducers) => {
      return prevProducers.map((producer) => {
        if (producer.id === id) {
          const owned = producer.owned;
          return { ...producer, owned: owned + 1 };
        } else {
          return producer;
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
