// import every required state
import { useState } from "react";

// import every child component
import SecondaryNavCard from "./SecondaryNavCard/SecondaryNavCard";
import PrimaryNavCard from "./PrimaryNavCard/PrimaryNavCard";
import MainContentCard from "./MainContentCard/MainContentCard";

// import the css file
import "./MotherCmp.css";

// the mother component
export default function MotherCmp() {
  // The userDetail object
  const [userDetails, setUserDetails] = useState({
    userPersonalInfo: {},
    userPlan: {},
  });

  // destructure the neccessary useStates at the highest level
  const [count, setCount] = useState(1);
  const [isMonth, setIsMonth] = useState(true);
  const [step1Done, setStep1Done] = useState(false);

  // PROIMARY NAVIGATION
  const increament = () => {
    const { name, email, phoneNumber } = userDetails.userPersonalInfo;
    count < 4 && name && email && phoneNumber && setCount(count + 1);
    setStep1Done(true);
  };
  const decreament = () => {
    count > 1 && setCount(count - 1);
  };
  const innerContent = () => (count === 4 ? "Confirm" : "Next Step");

  return (
    <main className="mother-cmp">
      <SecondaryNavCard count={count} />
      <MainContentCard
        count={count}
        step1Done={step1Done}
        setUserDetails={setUserDetails}
        isMonth={isMonth}
        setIsMonth={setIsMonth}
      />

      <PrimaryNavCard
        increament={increament}
        decreament={decreament}
        count={count}
        innerContent={innerContent()}
      />
    </main>
  );
}
