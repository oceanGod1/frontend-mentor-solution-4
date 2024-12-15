import UserInput from "./UserInput/UserInput";
import "./Step1Form.css";

export default function Step1Form({ inputValue, handleChange, step1Done }) {
  const userInputProperties = [
    { key: 105, type: "text", inputID: "name", label: "Name", name: "name", placeHolder: "eg. Stephen King" },
    { key: 106, type: "email", inputID: "email", label: "Email Address", name: "email", placeHolder: "eg. stephenking@lorem.com" },
    { key: 107, type: "tel", inputID: "phone-number", label: "Phone Number", name: "phoneNumber", placeHolder: "eg. +1 234 567 890" },
  ];

  return (
    <form className="step1-form">
      {userInputProperties.map(({ key, type, inputID, label, name, placeHolder }) => (
        <UserInput key={key} type={type} inputID={inputID} label={label} name={name} placeHolder={placeHolder} inputValue={inputValue} handleChange={handleChange} step1Done={step1Done} />
      ))}
    </form>
  );
}
