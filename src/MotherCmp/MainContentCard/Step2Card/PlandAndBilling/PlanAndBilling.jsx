import "./PlanAndBilling.css";
export default function PlanAndBilling({
  elemID,
  src,
  alt,
  title,
  monthly,
  yearly,
  isMonth,
  handleClick,
}) {
  return (
    <li id={elemID} className="plan-and-billing" onClick={handleClick}>
      <img className="plan-icon" src={src} alt={alt} />
      <h2 className="plan-title">{title}</h2>
      <p className="price">{isMonth ? `$${monthly}/mo` : `$${yearly}/yr`}</p>
      <p
        className="yearly-bonus"
        style={{ display: isMonth ? "none" : "block" }}
      >
        2 months free
      </p>
    </li>
  );
}
