import React from "react";
import Prices from "../../components/Prices/Prices";
import PricingHero from "../../components/PricingHero/PricingHero";
import Testimonials from "../../components/Testimonials/Testimonials";

const PricingSection = () => {
  return (
    <>
      <PricingHero />
      <Prices />
      <Testimonials />
    </>
  );
};

export default PricingSection;
