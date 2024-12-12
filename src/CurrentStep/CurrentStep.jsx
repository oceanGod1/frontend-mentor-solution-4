import "./CurrentStep.css";
export default function CurrentStep({ stepNum, stepTitle }) {
  const isActive = 2 < 2;
  const styles = { color: isActive ? "var(--color1)" : "var(--color7)", borderStyle: isActive ? "none" : "solid", backgroundColor: isActive ? "var(--color4)" : "inherit" };
  return (
    <li className="CurrentStep">
      <p className="CurrentStepIndex" style={styles}>
        {stepNum}
      </p>
      <p className="DesktopContent StepIndex">STEP{stepNum}</p>
      <p className="DesktopContent StepTitle">{stepTitle}</p>
    </li>
  );
}
