import { useState } from "react";

import StepTag from "../StepTag/StepTag";
import SiteFooter from "../SiteFooter/SiteFooter";

import "./Main.css";

export default function Main() {
  const [count, setCount] = useState(1);
  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);

  return (
    <main className="Main">
      <aside className="PageTagAside">
        <StepTag count={count} />
      </aside>
      <SiteFooter increament={increament} decreament={decreament} count={count} />
    </main>
  );
}
