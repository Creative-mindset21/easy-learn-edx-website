import React, { useEffect } from "react";
import Prices from "../../components/Prices/Prices";
import PricingHero from "../../components/PricingHero/PricingHero";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isRegistered = localStorage.getItem("isRegistered");

    if (isRegistered !== "true") {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <>
      <PricingHero />
      <Prices />
      <Testimonials />
    </>
  );
};

export default PricingSection;
