import About from "../../components/About/About";
import CallToAction from "../../components/CTA/CallToAction";
import Hero from "../../components/Hero/Hero";
//import css from "./homePage.module.css";

const HomePage = () => {
  return (
    <main>
      <>
        <Hero />
        <About />
        <CallToAction />
      </>
    </main>
  );
};

export default HomePage;
