import MainHeading from "./MainHeading/MainHeading";
import Step1Form from "./Step1Form/Step1Form";
import "./MainContentCard.css";
export default function MainContentCard({ count }) {
  const headingProperties = [
    { id: 121, heading: "Personal info", instruction: "Please provide your name, email address, and phone number." },
    { id: 131, heading: "Select your plan", instruction: "You have the option of monthly or yearly/monthly billing." },
    { id: 141, heading: "Pick add-ons", instruction: "Add-ons help enhance your gaming experience." },
    { id: 151, heading: "Finishing up", instruction: "Double-check everything looks OK befor confirming." },
  ];

  const inputAndSelection = [
    <Step1Form />,
    <MainHeading heading="Goat" instruction="Chicken" />,
    <MainHeading heading="white" instruction="frexh" />,
    <MainHeading heading="sea" instruction="river" />,
  ];

  const { heading, instruction } = headingProperties.find(item => item === headingProperties[count - 1]);
  return (
    <section className="MainContentCard">
      <MainHeading heading={heading} instruction={instruction} />
      {inputAndSelection[count - 1]}
    </section>
  );
}
