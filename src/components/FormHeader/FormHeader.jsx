import { MdOutlineChevronLeft } from "react-icons/md";
import css from "./formHeader.module.css";

const FormHeader = () => {
  return (
    <header className={css.formHeader}>
      <div className={css.text}>
        <p>
          Tell us a little about you/your child to customize the learning
          experience
        </p>
      </div>
    </header>
  );
};

export default FormHeader;
