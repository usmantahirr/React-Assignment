import { ReactComponent as Hero } from "../../../assets/images/hero.svg";
import "./_header.scss";

export default function Header({ children }) {
  return (
    <div className="header">
      <Hero />
      {children}
    </div>
  );
}
