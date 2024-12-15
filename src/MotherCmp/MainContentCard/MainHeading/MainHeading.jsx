import "./MainHeading.css";

export default function MainHeading({ heading, instruction }) {
  return (
    <div className="main-heading">
      <h1>{heading}</h1>
      <p>{instruction}</p>
    </div>
  );
}
