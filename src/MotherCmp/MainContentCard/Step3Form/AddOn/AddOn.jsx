import "./AddOn.css";
export default function AddOn({
  label,
  price,
  caption,
  name,
  elemID,
  isMonth,
  handleAddonSelection,
}) {
  return (
    <fieldset className="add-on">
      <input
        className="pick-add-on"
        type="checkbox"
        name={name}
        id={elemID}
        onChange={handleAddonSelection}
      />
      <label htmlFor="abc">{label}</label>
      <p className="price">
        +${isMonth ? `${price.monthly}/mo` : `${price.yearly}/yr`}
      </p>
      <figcaption className="offer">{caption}</figcaption>
    </fieldset>
  );
}
