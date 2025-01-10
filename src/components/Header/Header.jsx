import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <Navigate to="home" />}
      <header id="container" className={css.header}>
        <div className={css.logo}>
          <NavLink to="/">LearnEasy</NavLink>
          <NavLink to="register" className="btn">
            Get Started Today
          </NavLink>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
