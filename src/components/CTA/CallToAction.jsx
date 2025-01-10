import { NavLink } from "react-router-dom";
import css from "./callToAction.module.css";

const CallToAction = () => {
  return (
    <section className={css.callAction}>
      <h4>Start Your Child’s Journey to Success Today</h4>
      <NavLink to="register" className={`${css.btn} btn`}>
        Register Now
      </NavLink>
    </section>
  );
};

export default CallToAction;
