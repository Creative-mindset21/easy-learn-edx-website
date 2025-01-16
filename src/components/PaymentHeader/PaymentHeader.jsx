/* eslint-disable react/react-in-jsx-scope */
import css from "./PaymentHeader.module.css";
import { NavLink, Outlet } from "react-router-dom";

const PaymentHeader = () => {
  //! ===== CONDITIONAL CLASSES =====

  return (
    <>
      <header id="container" className={css.header}>
        <div className={css.logo}>
          <NavLink to="/">LearnEasy</NavLink>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default PaymentHeader;
