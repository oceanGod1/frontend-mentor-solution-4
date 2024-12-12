import NextStep from "../FooterLinks/NextStep";
import GoBack from "../FooterLinks/GoBack";

import "./SiteFooter.css";

export default function SiteFooter({ increament, decreament, count }) {
  return (
    <footer className="SiteFooter">
      <nav className="FooterMenu">
        <GoBack decreament={decreament} />
        <NextStep increament={increament} count={count} />
      </nav>
    </footer>
  );
}
