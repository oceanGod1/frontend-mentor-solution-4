// import every necessry state
import { useState } from "react";

// import every child component
import PlanAndBilling from "./PlandAndBilling/PlanAndBilling";

// import the css file
import "./Step2Card.css";

export default function Step2Card({
  isMonth,
  handlePlanDurationToggle,
  planAndBillingProperties,
  handlePlanSelection,
}) {
  // dynamically set the color of the texts in the toggle-plan li element
  const styles = (activeColor, inactiveColor) => {
    return { color: isMonth ? activeColor : inactiveColor };
  };

  return (
    <ul className="step2-card">
      {planAndBillingProperties.map(
        ({ id, elemID, src, alt, title, price }) => {
          const { monthly, yearly } = price;
          return (
            <PlanAndBilling
              key={id}
              elemID={elemID}
              src={src}
              alt={alt}
              title={title}
              monthly={monthly}
              yearly={yearly}
              isMonth={isMonth}
              handleClick={handlePlanSelection}
            />
          );
        }
      )}
      <li className="toggle-duration-card">
        <span style={styles("var(--color1)", "var(--color6)")}>Monthly</span>
        <input
          type="range"
          name="changePlan"
          id="change-plan"
          min={0}
          max={1}
          value={isMonth ? 0 : 1}
          onChange={handlePlanDurationToggle}
        />
        <span style={styles("var(--color6)", "var(--color1)")}>Yearly</span>
      </li>
    </ul>
  );
}
