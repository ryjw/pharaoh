import { Icon } from "@iconify/react";
export default function DebenDisplay({ debensGetter }) {
  return (
    <div className="flex">
      <Icon icon="streamline:shopping-jewelry-gold-gold-money-payment-bars-finance-wealth-bullion" />{" "}
      <span>
        {"  "} {debensGetter} debens{" "}
      </span>
    </div>
  );
}
