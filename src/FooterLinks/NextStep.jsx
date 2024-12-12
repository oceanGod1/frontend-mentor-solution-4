import "./NextStep.css";
// import { useState } from "react";

export default function NextStep({ increament, count }) {
  const isFinish = count < 4;
  const styles = { backgroundColor: isFinish ? "var(--color1)" : "var(--color2)" };
  return (
    <button className="NextStep" style={styles} onClick={increament}>
      Next Step
    </button>
  );
}
