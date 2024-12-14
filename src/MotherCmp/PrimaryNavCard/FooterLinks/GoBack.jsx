import "./GoBack.css";
export default function GoBack({ decreament }) {
  return (
    <button className="GoBack" onClick={decreament}>
      Go Back
    </button>
  );
}
