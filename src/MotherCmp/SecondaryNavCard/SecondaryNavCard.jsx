import SecondaryNav from "./SecondaryNav/SecondaryNav";
import "./SecondaryNavCard.css";

export default function SecondaryNavCard({ count }) {
  return (
    <aside className="secondary-nav-card">
      <SecondaryNav count={count} />
    </aside>
  );
}
