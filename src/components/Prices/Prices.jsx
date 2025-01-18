import React from "react";
import { groupLearningData, pricingData } from "../../data";
import { useState } from "react";
import css from "./prices.module.css";
import { useNavigate } from "react-router-dom";

import pricingImg1 from "../../assets/pricing2.jpg";
import pricingImg2 from "../../assets/pricing4.jpg";
import pricingImg3 from "../../assets/pricing7.jpg";

const Prices = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSelectCourse = (price) => {
    setSelectedPrice(price);
    navigate("/payment", { state: { selectedPrice: price } }); // Navigate to payment page with state
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

              <div className={css.imgs}>
                <img src={pricingImg1} alt="Image 1" />
                <img src={pricingImg2} alt="Image 2" />
                <img src={pricingImg3} alt="Image 3" />
                <span>{price.enrolledPeople}</span>
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
                <h4>{`£${price.pricing}/hour per student`}</h4>
              </div>

              <div className={css.imgs}>
                <img src={pricingImg1} alt="Image 1" />
                <img src={pricingImg2} alt="Image 2" />
                <img src={pricingImg3} alt="Image 3" />
                <span>{price.enrolledPeople}</span>
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
    </section>
  );
};

export default Prices;
