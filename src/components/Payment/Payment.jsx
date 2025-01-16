import { useLocation } from "react-router-dom";
import css from "./Payment.module.css";

/* eslint-disable react/react-in-jsx-scope */
const Payment = () => {
  const location = useLocation();
  const { selectedPrice } = location.state || {};

  return (
    <section className={css.paymentContainer}>
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

export default Payment;
