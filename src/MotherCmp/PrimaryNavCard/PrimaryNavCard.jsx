import NextStep from "./FooterLinks/NextStep";
import GoBack from "./FooterLinks/GoBack";

import "./PrimaryNavCard.css";

export default function PrimaryNavCard({ increament, decreament, count, innerContent }) {
  return (
    <footer className="primry-nav-card">
      <nav>
        <GoBack decreament={decreament} />
        <NextStep increament={increament} count={count} innerContent={innerContent} />
      </nav>
    </footer>
  );
}
