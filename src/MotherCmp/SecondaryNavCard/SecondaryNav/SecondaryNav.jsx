import CurrentStep from "./CurrentStep/CurrentStep";
import "./SecondaryNav.css";
export default function SecondaryNav({ count }) {
  const steps = [
    { id: 101, stepTitle: "YOUR INFO" },
    { id: 102, stepTitle: "SELECT PLAN" },
    { id: 103, stepTitle: "ADD-ONS" },
    { id: 104, stepTitle: "SUMMARY" },
  ];
  const stepNumIdx = stepId => steps.findIndex(val => val.id === stepId);
  return (
    <ul className="SecondaryNav">
      {steps.map(({ id, stepTitle }) => {
        return <CurrentStep key={id} stepNum={stepNumIdx(id) + 1} stepTitle={stepTitle} isActive={stepNumIdx(id) === count - 1} />;
      })}
    </ul>
  );
}
