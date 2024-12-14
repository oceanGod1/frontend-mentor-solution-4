import UserInput from "../UserInput/UserInput";
import "./Step1Form.css";
import { useState } from "react";

export default function Step1Form() {
  const userInputProperties = [
    { key: 105, type: "text", inputID: "name", label: "Name", name: "name", placeHolder: "eg. Stephen King" },
    { key: 106, type: "email", inputID: "email", label: "Email Address", name: "email", placeHolder: "eg. stephenking@lorem.com" },
    { key: 107, type: "number", inputID: "phone-number", label: "Phone Number", name: "phoneNumber", placeHolder: "eg. +1 234 567 890" },
  ];

  const userDetails = {};
  const handleChange = e => {
    userDetails[e.target.name] = e.target.value;
    console.log(e.target.value);
  };

  return (
    <form className="Step1Form">
      {/* <UserInput type="text" inputID="name" label="Name" placeHolder="abcd" handleChange={handleChange} /> */}

      {userInputProperties.map(({ key, type, inputID, label, placeHolder }) => (
        <UserInput key={key} type={type} inputID={inputID} label={label} placeHolder={placeHolder} handleChange={handleChange} />
      ))}
    </form>
  );
}
