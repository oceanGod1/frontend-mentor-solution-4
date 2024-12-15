import "./GoBack.css";
export default function GoBack({ decreament }) {
  return (
    <button className="go-back" onClick={decreament}>
      Go Back
    </button>
  );
}
