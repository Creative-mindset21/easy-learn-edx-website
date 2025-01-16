import { useLocation } from "react-router-dom";
import css from "./Payment.module.css";

/* eslint-disable react/react-in-jsx-scope */
const Payment = () => {
  const location = useLocation();
  const { selectedPrice } = location.state || {};

  return (
    <section className={css.paymentContainer} id="container">
      <div className={css.paymentType}>
        <h2>Payment Methods</h2>
        <p>Other payment methods</p>

        <div className={css.cardDetails}>
          <span>Card Payment</span>

          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className={css.form}
          >
            <fieldset>
              <legend>Card Number</legend>
              <input
                type="text"
                placeholder="Enter your 16-digit card number"
              />
            </fieldset>

            <div>
              <fieldset className={css.expiration}>
                <legend>Expiry Date</legend>
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  maxLength="2"
                  size="2"
                />
                <span>/</span>
                <input
                  type="text"
                  name="year"
                  placeholder="YY"
                  maxLength="2"
                  size="2"
                />
              </fieldset>

              <fieldset>
                <legend>CVV</legend>
                <input type="text" placeholder="***" maxLength="3" />
              </fieldset>
            </div>
          </form>
        </div>
      </div>

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
