import { NavLink } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  return (
    <header id="container" className={css.header}>
      <div className={css.logo}>
        <NavLink to="/">LearnEasy</NavLink>
        <button className={css.headerBtn}>Get Started Today</button>
      </div>
    </header>
  );
};

export default Header;
