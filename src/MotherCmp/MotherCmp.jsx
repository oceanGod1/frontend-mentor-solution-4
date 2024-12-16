// import every required state
import { useState, useEffect } from "react";

// import every child component
import SecondaryNavCard from "./SecondaryNavCard/SecondaryNavCard";
import PrimaryNavCard from "./PrimaryNavCard/PrimaryNavCard";
import MainContentCard from "./MainContentCard/MainContentCard";

// import the css file
import "./MotherCmp.css";

// the mother component
export default function MotherCmp() {
  // STEP 1
  // destructure the useState for next step, and go back
  const [count, setCount] = useState(1);
  // destructure the useState for the input fields in step 1
  const [step1Values, setStep1Values] = useState({ name: "", email: "", phoneNumber: "" });
  const [step1Done, setStep1Done] = useState(false);
  // event listener for the step 1 input fields
  const handleStep1Change = e => {
    return setStep1Values(currValue => {
      const a = () => {
        console.log(e.target.parentElement);
      };
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };

  // event listeners for the next step and go back buttons
  const increament = () => {
    const { name, email, phoneNumber } = step1Values;
    count < 4 && name && email && phoneNumber && setCount(count + 1);
    setStep1Done(true);
  };
  const decreament = () => count > 1 && setCount(count - 1);
  const innerContent = () => (count === 4 ? "Confirm" : "Next Step");

  return (
    <main className="mother-cmp">
      <SecondaryNavCard count={count} />
      <MainContentCard count={count} inputValue={step1Values} handleChange={handleStep1Change} step1Done={step1Done} />
      <PrimaryNavCard increament={increament} decreament={decreament} count={count} innerContent={innerContent()} />
    </main>
  );
}
