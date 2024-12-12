import "./StepTag.css";
import CurrentStep from "../CurrentStep/CurrentStep";
export default function StepTag({ count }) {
  return (
    <ul className="StepTag">
      <CurrentStep key={1} stepNum={1} stepTitle="YOUR INFO" />
      <CurrentStep key={2} stepNum={2} stepTitle="SELECT PLAN" />
      <CurrentStep key={3} stepNum={3} stepTitle="ADD-ONS" />
      <CurrentStep key={4} stepNum={4} stepTitle="SUMMARY" />
    </ul>
  );
}

// import "./StepTag.css";
// import CurrentStep from "../CurrentStep/CurrentStep";
// export default function StepTag({ count }) {
//   return (
//     <ul className="StepTag">
//       <CurrentStep key={1} stepNum={1} stepTitle="YOUR INFO" />
//       <CurrentStep key={2} stepNum={2} stepTitle="SELECT PLAN" />
//       <CurrentStep key={3} stepNum={3} stepTitle="ADD-ONS" />
//       <CurrentStep key={4} stepNum={4} stepTitle="SUMMARY" />
//     </ul>
//   );
// }
