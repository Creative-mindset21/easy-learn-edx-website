import { NavLink, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import css from "./header.module.css";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);

  //! ===== HAMBURGER MENU =====
  const menuBtn = () => {
    setIsTrue((prev) => !prev);
  };

  //! ===== CONDITIONAL CLASSES =====
  const navOpen = css.navOpen;
  const navClose = css.navClose;

  return (
    <>
      <header id="container" className={css.header}>
        <div className={css.logo}>
          <NavLink to="/">LearnEasy</NavLink>
        </div>

        <nav className={`${css.nav} ${isTrue ? navOpen : navClose}`}>
          <ul>
            <li>
              <HashLink to="#about">Benefits</HashLink>
            </li>
            <li>
              <HashLink to="#testimonies">Testimonials</HashLink>
            </li>
            <li>
              <NavLink to="register" className="btn">
                Get Started Today
              </NavLink>
            </li>
          </ul>

          <button className={css.closeBtn} onClick={menuBtn}>
            <MdClose />
          </button>
        </nav>

        <button className={css.menuBtn} onClick={menuBtn}>
          <MdMenu />
        </button>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
