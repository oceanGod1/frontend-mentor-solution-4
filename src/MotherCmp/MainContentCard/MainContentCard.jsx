import { useState } from "react";

import MainHeading from "./MainHeading/MainHeading";
import Step1Form from "./Step1Form/Step1Form";
import Step2Card from "./Step2Card/Step2Card";
import "./MainContentCard.css";

export default function MainContentCard({ count, inputValue, handleChange, step1Done }) {
  const headingProperties = [
    { id: 121, heading: "Personal info", instruction: "Please provide your name, email address, and phone number." },
    { id: 131, heading: "Select your plan", instruction: "You have the option of monthly or yearly billing." },
    { id: 141, heading: "Pick add-ons", instruction: "Add-ons help enhance your gaming experience." },
    { id: 151, heading: "Finishing up", instruction: "Double-check everything looks OK befor confirming." },
  ];

  const inputAndSelection = [
    <Step1Form inputValue={inputValue} handleChange={handleChange} step1Done={step1Done} />,
    <Step2Card />,
    <MainHeading heading="white" instruction="frexh" />,
    <MainHeading heading="sea" instruction="river" />,
  ];

  const { heading, instruction } = headingProperties.find(item => item === headingProperties[count - 1]);
  return (
    <section className="main-content-card">
      <MainHeading heading={heading} instruction={instruction} />
      {inputAndSelection[count - 1]}
    </section>
  );
}
