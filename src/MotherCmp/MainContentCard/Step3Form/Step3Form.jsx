import AddOn from "./AddOn/AddOn";
import "./Step3Form.css";
// The properties of the child of the step3Form component. They should ordinarily have been fetched from the site server
const addOnProperties = [
  {
    id: 115,
    label: "Online service",
    price: { monthly: 1, yearly: 10 },
    caption: "Access to multiplayer games",
    name: "onlineService",
    elemID: "online-service",
  },
  {
    id: 116,
    label: "Larger storage",
    price: { monthly: 2, yearly: 20 },
    caption: "Extra 1TB of cloud save",
    name: "largerStorage",
    elemID: "larger-storage",
  },
  {
    id: 117,
    label: "Cusomizable profile",
    price: { monthly: 2, yearly: 20 },
    caption: "Custom theme on your profile",
    name: "customizableProfile",
    elemID: "customizable-profile",
  },
];

export default function Step3Form({ isMonth, handleAddonSelection }) {
  return (
    <form className="step3-form">
      {addOnProperties.map(({ id, label, price, caption, name, elemID }) => {
        return (
          <AddOn
            key={id}
            label={label}
            price={price}
            caption={caption}
            name={name}
            elemID={elemID}
            isMonth={isMonth}
            handleAddonSelection={handleAddonSelection}
          />
        );
      })}
    </form>
  );
}
