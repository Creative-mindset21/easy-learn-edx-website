import { aboutData } from "../../data";
import React from "react";
import css from "./about.module.css";

const About = () => {
  return (
    <section className={css.about} id="about">
      <h2>
        Why Families Trust <span className={css.span}>Learn Easy </span>for
        Academic Success
      </h2>

      <div className={css.aboutDetails}>
        {aboutData.map((about, i) => (
          <div className={css.box} key={i}>
            <img
              src={about.img}
              alt="About Details Container Design"
              className={css.img}
            />
            <div>
              <h3>{about.title}</h3>
              <p>{about.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
