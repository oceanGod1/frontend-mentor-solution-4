// import every necessry state
import { useState } from "react";

// import every child component
import PlanAndBilling from "./PlandAndBilling/PlanAndBilling";

// import the css file
import "./Step2Card.css";

export default function Step2Card() {
  // destructure every necessary state
  const [isMonth, setIsMonth] = useState(true);
  const [userPlan, setUserPlan] = useState({ selectedPlan: "", planPrice: "", planDuration: "", currency: "$", forwardSlash: "/" });

  // the properties of this components's child that should ordinarily have been fetched from the site server
  const planAndBillingProperties = [
    { id: 108, elemID: "arcadPlan", src: "../../../../assets/images/icon-arcade.svg", alt: "arcade plan icon", title: "Arcade", price: { monthly: "9", yearly: "90" } },
    { id: 109, elemID: "advancedPlan", src: "../../../../assets/images/icon-advanced.svg", alt: "advanced plan icon", title: "Advanced", price: { monthly: "12", yearly: "120" } },
    { id: 110, elemID: "proPlan", src: "../../../../assets/images/icon-pro.svg", alt: "pro plan icon", title: "Pro", price: { monthly: "15", yearly: "150" } },
  ];

  // EventListeners to toggle the plan duration, using the destructured isMonth state above
  const handlePlanDurationToggle = e => {
    setIsMonth(!isMonth);
    const step2CardChildrem = Array.from(e.currentTarget.parentElement.parentElement.children);
    step2CardChildrem.map(children => children.classList.remove("selected-plan"));
    setUserPlan({ selectedPlan: "", planPrice: "", planDuration: "", currency: "$", forwardSlash: "/" });
  };

  // EventListeners to select preferd plan, using the destructured userPlan state above
  const handlePlanSelection = e => {
    const selectedPlan = e.currentTarget;
    const step2CardChildrem = Array.from(selectedPlan.parentElement.children);
    const planProperties = planAndBillingProperties.find(item => item.elemID === selectedPlan.id);

    setUserPlan(currPlan => {
      return { ...currPlan, selectedPlan: planProperties.elemID, planPrice: isMonth ? planProperties.price.monthly : planProperties.price.yearly, planDuration: isMonth ? "mo" : "yr" };
    });

    step2CardChildrem.filter(child => (child.id === planProperties.elemID ? child.classList.add("selected-plan") : child.classList.remove("selected-plan")));
  };

  // dynamically set the color of the texts in the toggle-plan li element
  const styles = (activeColor, inactiveColor) => {
    return { color: isMonth ? activeColor : inactiveColor };
  };

  return (
    <ul className="step2-card">
      {planAndBillingProperties.map(({ id, elemID, src, alt, title, price }) => {
        const { monthly, yearly } = price;
        return <PlanAndBilling key={id} elemID={elemID} src={src} alt={alt} title={title} monthly={monthly} yearly={yearly} isMonth={isMonth} handleClick={handlePlanSelection} />;
      })}
      <li className="toggle-duration-card">
        <span style={styles("var(--color1)", "var(--color6)")}>Monthly</span>
        <input type="range" name="changePlan" id="change-plan" min={0} max={1} value={isMonth ? 0 : 1} onChange={handlePlanDurationToggle} />
        <span style={styles("var(--color6)", "var(--color1)")}>Yearly</span>
      </li>
    </ul>
  );
}
