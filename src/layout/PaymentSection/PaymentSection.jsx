import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "../../components/Payment/Payment";

const PaymentSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isRegistered = localStorage.getItem("isRegistered");

    if (isRegistered !== "true") {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <>
      <Payment />
    </>
  );
};

export default PaymentSection;
