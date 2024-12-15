import "./CurrentStep.css";
export default function CurrentStep({ stepNum, stepTitle, isActive }) {
  const styles = { color: isActive ? "var(--color1)" : "var(--color7)", borderStyle: isActive ? "none" : "solid", backgroundColor: isActive ? "var(--color4)" : "inherit" };
  return (
    <li className="current-step">
      <p style={styles}>{stepNum}</p>
      <p>STEP{stepNum}</p>
      <p>{stepTitle}</p>
    </li>
  );
}
