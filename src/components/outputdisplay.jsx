// import { Icon } from "@iconify/react";
export default function DisplayOutput({ id, producers }) {
  const producer = producers.filter((producer) => producer.id === id)[0];
  return (
    producer.owned > 0 && (
      <div>
        {producer.icon}
        <span>
          {" "}
          {producer.owned}
          {"  "}
        </span>
        <span className="production">
          {producer.owned * producer.output} grain/sec
        </span>
      </div>
    )
  );
}
