import SecondaryNav from "./SecondaryNav/SecondaryNav";
import "./SecondaryNavCard.css";

export default function SecondaryNavCard({ count }) {
  return (
    <aside className="SecondaryNavCard">
      <SecondaryNav count={count} />
    </aside>
  );
}
