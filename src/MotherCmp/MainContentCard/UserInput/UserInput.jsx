import "./UserInput.css";
export default function UserInput({ type, inputID, label, name, placeHolder, handleChange }) {
  // const handleChange = e => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="UserInput">
      <label htmlFor={inputID}>{label}</label>
      <fieldset>
        <input type={type} id={inputID} name={name} placeholder={placeHolder} onInput={handleChange} />
      </fieldset>
    </div>
  );
}
