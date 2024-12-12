import "./StepTag.css";
import CurrentStep from "../CurrentStep/CurrentStep";
export default function StepTag() {
  return (
    <ul className="StepTag">
      <CurrentStep stepNum={1} stepTitle="YOUR INFO" />
      <CurrentStep stepNum={2} stepTitle="SELECT PLAN" />
      <CurrentStep stepNum={3} stepTitle="ADD-ONS" />
      <CurrentStep stepNum={4} stepTitle="SUMMARY" />
    </ul>
  );
}
