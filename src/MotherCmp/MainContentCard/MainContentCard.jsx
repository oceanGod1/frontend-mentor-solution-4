import { useState, useEffect } from "react";

import MainHeading from "./MainHeading/MainHeading";
import Step1Form from "./Step1Form/Step1Form";
import Step2Card from "./Step2Card/Step2Card";
import Step3Form from "./Step3Form/Step3Form";

import "./MainContentCard.css";

// The properties of the child of the heading component. They should ordinarily have been fetched from the site server
const headingProperties = [
  {
    id: 108,
    heading: "Personal info",
    instruction: "Please provide your name, email address, and phone number.",
  },
  {
    id: 109,
    heading: "Select your plan",
    instruction: "You have the option of monthly or yearly billing.",
  },
  {
    id: 110,
    heading: "Pick add-ons",
    instruction: "Add-ons help enhance your gaming experience.",
  },
  {
    id: 111,
    heading: "Finishing up",
    instruction: "Double-check everything looks OK befor confirming.",
  },
];

// The properties of the child of the step2Card component. They should ordinarily have been fetched from the site server
const planAndBillingProperties = [
  {
    id: 112,
    elemID: "arcadPlan",
    src: "../../../../assets/images/icon-arcade.svg",
    alt: "arcade plan icon",
    title: "Arcade",
    price: { monthly: "9", yearly: "90" },
  },
  {
    id: 113,
    elemID: "advancedPlan",
    src: "../../../../assets/images/icon-advanced.svg",
    alt: "advanced plan icon",
    title: "Advanced",
    price: { monthly: "12", yearly: "120" },
  },
  {
    id: 114,
    elemID: "proPlan",
    src: "../../../../assets/images/icon-pro.svg",
    alt: "pro plan icon",
    title: "Pro",
    price: { monthly: "15", yearly: "150" },
  },
];

export default function MainContentCard({
  count,
  step1Done,
  setUserDetails,
  isMonth,
  setIsMonth,
}) {
  // DESTRUCTURE ALL THE NECESSARY USESTATE AND EFFECTS
  // useState for the input fields in step 1
  const [userPersonalInfo, setUserPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // useState for the plan selection in step 2
  const [userPlan, setUserPlan] = useState({
    selectedPlan: "",
    planPrice: "",
    planDuration: "",
    currency: "$",
    forwardSlash: "/",
  });

  // useState for the add-on checkboxes in step 3
  const [pickAddOn, setPickAddOn] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  // useEffect for the final user's data.
  useEffect(() => {
    setUserDetails(currUserDetail => {
      return {
        ...currUserDetail,
        userPersonalInfo: userPersonalInfo,
        userPlan: userPlan,
      };
    });
  }, [userPersonalInfo, userPlan, pickAddOn]);

  // EVENT HANDLERS FOR ALL DESTRUCTURED STATES
  // event handler for the step 1 input fields
  const handleStep1Change = e => {
    return setUserPersonalInfo(currValue => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };

  // Event handler for toggling the plan duration in step 2
  const handlePlanDurationToggle = e => {
    setIsMonth(!isMonth);
    const step2CardChildren = Array.from(
      e.currentTarget.parentElement.parentElement.children
    );
    step2CardChildren.map(children =>
      children.classList.remove("selected-plan")
    );
    setUserPlan({
      selectedPlan: "",
      planPrice: "",
      planDuration: "",
      currency: "$",
      forwardSlash: "/",
    });
  };
  // Event handler to select preferd plan in step 2
  const handlePlanSelection = e => {
    const selectedPlan = e.currentTarget;
    const step2CardChildren = Array.from(selectedPlan.parentElement.children);

    const planProperties = planAndBillingProperties.find(
      item => item.elemID === selectedPlan.id
    );
    setUserPlan(currPlan => {
      return {
        ...currPlan,
        selectedPlan: planProperties.elemID,
        planPrice: isMonth
          ? planProperties.price.monthly
          : planProperties.price.yearly,
        planDuration: isMonth ? "mo" : "yr",
      };
    });
    step2CardChildren.filter(child =>
      child.id === planProperties.elemID
        ? child.classList.add("selected-plan")
        : child.classList.remove("selected-plan")
    );
  };

  // Event handler for the checkboxes in step 3
  const handleAddonSelection = e => {
    setPickAddOn(currAddOn => {
      return { ...currAddOn, [e.target.name]: !pickAddOn[e.target.name] };
    });
  };

  const inputAndSelection = [
    <Step1Form
      inputValue={userPersonalInfo}
      handleChange={handleStep1Change}
      step1Done={step1Done}
    />,
    <Step2Card
      isMonth={isMonth}
      planAndBillingProperties={planAndBillingProperties}
      handlePlanDurationToggle={handlePlanDurationToggle}
      handlePlanSelection={handlePlanSelection}
    />,
    <Step3Form isMonth={isMonth} handleAddonSelection={handleAddonSelection} />,
    <MainHeading heading="sea" instruction="river" />,
  ];

  const { heading, instruction } = headingProperties.find(
    item => item === headingProperties[count - 1]
  );
  return (
    <section className="main-content-card">
      <MainHeading heading={heading} instruction={instruction} />
      {inputAndSelection[count - 1]}
    </section>
  );
}
