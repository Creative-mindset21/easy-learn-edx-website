import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import css from "./Testimonials.module.css";
import { testimonialsData } from "../../data";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(showNext, 4000);
    return () => clearInterval(interval);
  }, []);

  // ! ===== PREVIOUS IMAGE BUTTON =====
  function showPrevious() {
    setImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  }

  // ! ===== NEXT IMAGE BUTTON =====
  function showNext() {
    setImageIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }

  return (
    <section className={css.testimonials} id="testimonies">
      <div className={css.left}>
        <h3>
          Parents and Students Trust <span>Learn Easy</span> to Deliver Results
        </h3>

        <div className={css.btns}>
          <button onClick={showPrevious}>
            <MdKeyboardArrowLeft />
          </button>
          <button onClick={showNext}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      <div className={css.right}>
        {testimonialsData.map(
          (test, i) =>
            i === imageIndex && (
              <div className={`${css.textBox}`} key={i}>
                <img src={test.img} alt="" className={css.img} />
                <div>
                  <h4>{test.title}</h4>
                  <p>{test.name}</p>
                  <p>{test.occupation}</p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
