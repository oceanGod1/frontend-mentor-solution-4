import "./UserInput.css";
export default function UserInput({ type, inputID, label, name, placeHolder, inputValue, handleChange, step1Done }) {
  const handleFocusBlur = action => e => e.target.parentElement.classList[action]("fieldset-isactive");
  const handleOmmition = className => (step1Done && inputValue[name] === "" ? className : undefined);

  return (
    <div className="user-input">
      <label htmlFor={inputID}>{label}</label>
      <p className={handleOmmition("error-message")}>This field is required</p>
      <fieldset className={handleOmmition("fieldset-on-error")}>
        <input type={type} id={inputID} name={name} placeholder={placeHolder} value={inputValue[name]} onChange={handleChange} onFocus={handleFocusBlur("add")} onBlur={handleFocusBlur("remove")} />
      </fieldset>
    </div>
  );
}
