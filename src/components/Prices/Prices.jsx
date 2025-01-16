/* eslint-disable react/react-in-jsx-scope */
import { groupLearningData, pricingData } from "../../data";
import { useState } from "react";
import css from "./prices.module.css";

const Prices = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSelectCourse = (price) => {
    setSelectedPrice(price);
  };

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
                <button
                  className="btn"
                  onClick={() => handleSelectCourse(price)}
                >
                  Select Course
                </button>
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
                <button
                  className="btn"
                  onClick={() => handleSelectCourse(price)}
                >
                  Select Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Section */}
      <div className={css.card}>
        {selectedPrice && (
          <div className={css.box}>
            <img
              src={selectedPrice.img}
              alt={`Price image of the pricing box `}
            />

            <div>
              <h3>{selectedPrice.title}</h3>
              <p>{selectedPrice.desc}</p>
            </div>

            <div>
              <h4>{`£${selectedPrice.pricing}/hour`}</h4>
            </div>

            <button className="btn">Proceed to Payment</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Prices;
