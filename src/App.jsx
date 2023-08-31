import { useEffect, useState } from "react";
import Clicker from "./components/clicker";
import { producerArray } from "./lib/lib.jsx";
import GrainDisplay from "./components/grain_display";
import SellButton from "./components/sell_button";
import DebenDisplay from "./components/deben_display";
import BuyButton from "./components/buy_buttons";
import DisplayOutput from "./components/outputdisplay";

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
        <BuyButton
          id={0}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={1}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={2}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={3}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={4}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={5}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={6}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
        <BuyButton
          id={7}
          debens={debens}
          setDebens={setDebens}
          producers={producers}
          setProducers={setProducers}
        />
      </div>
      <DisplayOutput id={0} producers={producers} />
      <DisplayOutput id={1} producers={producers} />
      <DisplayOutput id={2} producers={producers} />
      <DisplayOutput id={3} producers={producers} />
      <DisplayOutput id={4} producers={producers} />
      <DisplayOutput id={5} producers={producers} />
      <DisplayOutput id={6} producers={producers} />
      <DisplayOutput id={7} producers={producers} />
    </>
  );
}

export default App;
