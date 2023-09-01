import { useEffect, useState } from "react";
import Clicker from "./components/Clicker";
import { producerArray } from "./lib/lib.jsx";
import GrainDisplay from "./components/GrainDisplay";
import SellButton from "./components/SellButton";
import DebenDisplay from "./components/DebenDisplay";
import BuyButton from "./components/BuyButton";
import DisplayOutput from "./components/OutputDisplay";

function App() {
  const [producers, setProducers] = useState(producerArray);
  const [grain, setGrain] = useState(0);
  const [debens, setDebens] = useState(0);
  const [grainPrice, setGrainPrice] = useState(0.5);

  useEffect(() => {
    let interval = setInterval(() => {
      let add = 0;
      producers.forEach((producer) => {
        let count = producer.owned * producer.output;
        add += count;
      });
      setGrain((prevGrain) => {
        return prevGrain + add;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [producers]);

  return (
    <>
      <h1>Pharaoh</h1>
      <Clicker grainGetter={grain} grainSetter={setGrain} />
      <div className="flex">
        <GrainDisplay grainGetter={grain} />
        <SellButton
          grainGetter={grain}
          grainSetter={setGrain}
          debensGetter={debens}
          debensSetter={setDebens}
          grainPriceGetter={grainPrice}
        />
      </div>
      <div className="flex">
        <DebenDisplay debensGetter={debens} />
        {producers.map((producer) => {
          <BuyButton
            id={producer.id}
            debens={debens}
            setDebens={setDebens}
            producers={producers}
            setProducers={setProducers}
          />;
        })}
      </div>
      {producers.map((producer) => {
        <DisplayOutput id={producer.id} producers={producers} />;
      })}
    </>
  );
}

export default App;
