import CurrentStep from "./CurrentStep/CurrentStep";
import "./SecondaryNav.css";
export default function SecondaryNav({ count }) {
  // The content of the secondary nav. this array serves as data base, meaning that; the content of the array should have been surced from a server
  const steps = [
    { id: 101, stepTitle: "YOUR INFO" },
    { id: 102, stepTitle: "SELECT PLAN" },
    { id: 103, stepTitle: "ADD-ONS" },
    { id: 104, stepTitle: "SUMMARY" },
  ];

  // find the index of the steps array, and match it with the index of the renderd component
  const stepNumIdx = stepId => steps.findIndex(val => val.id === stepId);

  return (
    <ul className="secondary-nav">
      {steps.map(({ id, stepTitle }) => {
        return <CurrentStep key={id} stepNum={stepNumIdx(id) + 1} stepTitle={stepTitle} isActive={stepNumIdx(id) === count - 1} />;
      })}
    </ul>
  );
}
