import { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
import css from "./form2.module.css";
import moment from "moment";

const Form2 = ({ formData, setFormData, nextPage, prevPage }) => {
  const [error, setError] = useState("");

  //! ===== HANDLE INTERESTED COURSES SECTION ===== //
  const handleInterestedCourses = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interestedCourses: [...formData.interestedCourses, value],
      });
    } else {
      setFormData({
        ...formData,
        interestedCourses: formData.interestedCourses.filter(
          (interestedCourses) => interestedCourses !== value
        ),
      });
    }
  };

  //! ===== HANDLE EXAM BOARD SECTION ===== //
  const handleExamBoard = (e) => {
    setFormData((prev) => ({ ...prev, examinationBoards: e.target.value }));
  };

  //! ===== HANDLE SUBMIT ===== //
  const handleSubmit = (e) => {
    e.preventDefault();

    //? ===== CHECK IF INTERESTED COURSE IS SELECTED ===== //
    if (formData.interestedCourses.length === 0) {
      setError("Please select at least a course");
    } else {
      setError("");
      nextPage();
    }
  };

  return (
    <>
      <FormHeader />

      <section className="forms">
        <div className="container">
          <form action="" className="form" onSubmit={handleSubmit}>
            {/* ========== SCHOOL YEAR GROUP ==========  */}
            <div className={css.yearGroup}>
              <h2 className="head">
                School Year Group ({`In September ${moment().format("YYYY")}`}){" "}
                <span>*</span>
              </h2>

              <fieldset>
                <legend>
                  <label htmlFor="schoolYearGroup">School Year Group</label>
                </legend>

                <select
                  value={formData.schoolYearGroup}
                  id="schoolYearGroup"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      schoolYearGroup: e.target.value,
                    }))
                  }
                  required
                >
                  <option value="" disabled>
                    Select a Year Group
                  </option>
                  <option value="year 2">Year 2</option>
                  <option value="year 3">Year 3</option>
                  <option value="year 4">Year 4</option>
                  <option value="year 5">Year 5</option>
                  <option value="year 6">Year 6</option>
                  <option value="year 7">Year 7</option>
                  <option value="year 8">Year 8</option>
                  <option value="year 9">Year 9</option>
                  <option value="year 10">Year 10</option>
                  <option value="year 11">Year 11</option>
                </select>
              </fieldset>

              <fieldset>
                <legend>
                  <label htmlFor="schoolName">School Name</label>
                </legend>

                <input
                  type="text"
                  id="schoolName"
                  placeholder="Enter school name"
                  value={formData.schoolName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      schoolName: e.target.value,
                    }))
                  }
                  required
                />
              </fieldset>
            </div>

            {/* ========== INTERESTED COURSES ==========  */}
            <div className={css.courses}>
              <h2 className="head">
                Interested Courses <span>*</span>
              </h2>

              {error && <p style={{ color: "red" }}>{error}</p>}

              <label htmlFor="maths">
                <input
                  type="checkbox"
                  id="maths"
                  value="Maths"
                  checked={formData.interestedCourses.includes("Maths")}
                  onChange={handleInterestedCourses}
                />

                <span>Maths</span>
              </label>

              <label htmlFor="english">
                <input
                  type="checkbox"
                  id="english"
                  value="English"
                  checked={formData.interestedCourses.includes("English")}
                  onChange={handleInterestedCourses}
                />
                <span>English</span>
              </label>

              <label htmlFor="science">
                <input
                  type="checkbox"
                  id="science"
                  value="Science"
                  checked={formData.interestedCourses.includes("Science")}
                  onChange={handleInterestedCourses}
                />
                <span>Science</span>
              </label>
            </div>

            {/* ========== EXAM BOARD ==========  */}
            <div className={css.examBoard}>
              <h2 className="head">
                Examination Boards (For Year 8 and Above)
              </h2>

              <label htmlFor="aqa">
                <input
                  type="radio"
                  name="examBoard"
                  id="aqa"
                  value="aqa"
                  checked={formData.examinationBoards === "aqa"}
                  onChange={handleExamBoard}
                  required
                />
                <span>AQA</span>
              </label>

              <label htmlFor="ocrGateway">
                <input
                  type="radio"
                  name="examBoard"
                  id="ocrGateway"
                  value="ocrGateway"
                  checked={formData.examinationBoards === "ocrGateway"}
                  onChange={handleExamBoard}
                />
                <span>OCR Gateway</span>
              </label>

              <label htmlFor="edexcel">
                <input
                  type="radio"
                  name="examBoard"
                  id="edexcel"
                  value="edexcel"
                  checked={formData.examinationBoards === "edexcel"}
                  onChange={handleExamBoard}
                />
                <span>Edexcel</span>
              </label>

              <label htmlFor="ocrCentury">
                <input
                  type="radio"
                  name="examBoard"
                  id="ocrCentury"
                  value="ocrCentury"
                  checked={formData.examinationBoards === "ocrCentury"}
                  onChange={handleExamBoard}
                />
                <span>OCR 21st Century</span>
              </label>
            </div>

            <div className="btns">
              <button className="next-btn" onClick={prevPage}>
                Previous
              </button>

              <button type="submit" className="next-btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form2;
