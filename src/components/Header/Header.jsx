import { NavLink, Outlet } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  return (
    <>
      <header id="container" className={css.header}>
        <div className={css.logo}>
          <NavLink to="/">LearnEasy</NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="#about">Benefits</NavLink>
            </li>
            <li>
              <NavLink to="#testimonies">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="register" className="btn">
                Get Started Today
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
