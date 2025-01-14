import css from "./pricingHero.module.css";

const PricingHero = () => {
  return (
    <section className={css.hero}>
      <div className={css.left}>
        <span>Thanks for registering</span>
        <h1>Personalized Learning Starts Now!</h1>
        <div>
          <p>Choose the perfect learning option for you below</p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
