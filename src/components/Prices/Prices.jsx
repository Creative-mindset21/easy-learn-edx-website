import { groupLearningData, pricingData } from "../../data";
import css from "./prices.module.css";

const Prices = () => {
  return (
    <section className={css.prices} id="container">
      <div className={css.oneToOne} id="oneToOne">
        <h2>One-to-One Learning</h2>
        <p>
          Get personalized attention to accelerate your progress in Maths and
          English.
        </p>

        <div className={css.card}>
          {pricingData.map((price, index) => (
            <div key={index} className={css.box}>
              <img
                src={price.img}
                alt={`Price image of the pricing box ${index}`}
              />

              <div>
                <h3>{price.title}</h3>
                <p>{price.desc}</p>
              </div>

              <div>
                <h4>{`£${price.pricing}/hour`}</h4>
              </div>

              <div>
                <button className="btn">Select Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={css.groupLearning} id="groupSection">
        <h2>Group Learning</h2>
        <p>
          Collaborate with up to 4 peers in engaging group sessions, designed
          for interaction and growth
        </p>

        <div className={css.card}>
          {groupLearningData.map((price, index) => (
            <div key={index} className={css.box}>
              <img
                src={price.img}
                alt={`Price image of the pricing box ${index}`}
              />

              <div>
                <h3>{price.title}</h3>
                <p>{price.desc}</p>
              </div>

              <div>
                <h4>{`£${price.pricing}/hour`}</h4>
              </div>

              <div>
                <button className="btn">Select Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
