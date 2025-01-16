/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./layout/HomePage/HomePage";
import Form from "./layout/RegistrationForm/Form";
import PricingSection from "./layout/PricingSection/PricingSection";
import PricingHeader from "./components/PricingHeader/PricingHeader";
import PaymentHeader from "./components/PaymentHeader/PaymentHeader";
import PaymentSection from "./layout/PaymentSection/PaymentSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="register" element={<Form />} />

        <Route path="pricing" element={<PricingHeader />}>
          <Route index element={<PricingSection />} />
        </Route>

        <Route path="payment" element={<PaymentHeader />}>
          <Route index element={<PaymentSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
