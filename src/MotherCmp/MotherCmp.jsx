import { useState } from "react";

import SecondaryNavCard from "./SecondaryNavCard/SecondaryNavCard";
import PrimaryNavCard from "./PrimaryNavCard/PrimaryNavCard";
import MainContentCard from "./MainContentCard/MainContentCard";

import "./MotherCmp.css";

export default function MotherCmp() {
  const [count, setCount] = useState(1);
  const increament = () => count < 4 && setCount(count + 1);
  const decreament = () => count > 1 && setCount(count - 1);
  const innerContent = () => (count === 4 ? "Confirm" : "Next Step");
  return (
    <main className="MotherCmp">
      <SecondaryNavCard count={count} />
      <MainContentCard count={count} />
      <PrimaryNavCard increament={increament} decreament={decreament} count={count} innerContent={innerContent()} />
    </main>
  );
}
