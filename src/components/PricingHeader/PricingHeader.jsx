import css from "./pricingHeader.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const PricingHeader = () => {
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
              <HashLink to="#oneToOne">One-to-One</HashLink>
            </li>
            <li>
              <HashLink to="#groupSection">Group Section</HashLink>
            </li>
            <li></li>
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

export default PricingHeader;
