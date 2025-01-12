import css from "./hero.module.css";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/image1.svg";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.left}>
        <h1>Personalized Learning, Tailored for Success</h1>
        <div>
          <p>
            Empower your child’s education with expert tutors and flexible
            options tailored to your schedule.
          </p>
          <NavLink to="register" className={`${css.heroBtn} btn`}>
            Get Started Today
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
