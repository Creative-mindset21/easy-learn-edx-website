import css from "./hero.module.css";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/image1.svg";
import React from "react";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.left}>
        <h1>Personalized Learning, Tailored for Success</h1>
        <div>
          <p>
            The knowledge of the different subjects are built up with you or
            your child in mind
          </p>
          <NavLink to="register" className={`${css.heroBtn} btn`}>
            Will you like to start today
          </NavLink>
        </div>
      </div>

      <div className={css.right}>
        <img src={image1} alt="Image of a woman teaching a boy" />
      </div>
    </section>
  );
};

export default Hero;
