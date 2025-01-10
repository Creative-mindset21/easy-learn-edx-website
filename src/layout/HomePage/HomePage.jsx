import About from "../../components/About/About";
import CallToAction from "../../components/CTA/CallToAction";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
//import css from "./homePage.module.css";

const HomePage = () => {
  return (
    <main>
      <>
        <Hero />
        <About />
        <CallToAction />
        <Testimonials />
      </>
    </main>
  );
};

export default HomePage;
