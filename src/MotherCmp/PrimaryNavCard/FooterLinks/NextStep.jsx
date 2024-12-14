import "./NextStep.css";

export default function NextStep({ increament, count, innerContent }) {
  const isFinish = count === 4;
  const styles = { backgroundColor: isFinish ? "var(--color2)" : "var(--color1)" };
  return (
    <button className="NextStep" style={styles} onClick={increament}>
      {innerContent}
    </button>
  );
}
