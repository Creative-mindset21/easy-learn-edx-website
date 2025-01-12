import { useState } from "react";
import css from "./form4.module.css";
import FormHeader from "../FormHeader/FormHeader";

const Form4 = ({ formData, prevPage, setFormData }) => {
  const [error, setError] = useState("");
  //! ===== HANDLE FORM SUBMIT ===== //
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.specialEducationNeeds === "yes" &&
      formData.specialEducationNeedsComments === ""
    ) {
      setError("Please enter a comment");
    } else {
      setError("");
      console.log("Form submitted:", formData);
    }
  };

  //! ===== HANDLE SEPCIAL NEEDS ===== //
  const handleSpecialNeeds = (e) => {
    setFormData((prev) => ({ ...prev, specialEducationNeeds: e.target.value }));
  };

  return (
    <>
      <FormHeader />

      <section className="forms">
        <div className="container">
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className={css.details}>
              <h2 className="head">Location</h2>

              {/* ========== ADDRESS ==========  */}
              <fieldset>
                <legend>
                  <label htmlFor="homeAddress">Address</label>
                </legend>
                <input
                  type="text"
                  id="homeAddress"
                  placeholder="Enter home address"
                  value={formData.homeAddress}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      homeAddress: e.target.value,
                    }))
                  }
                  required
                />
              </fieldset>

              {/* ========== CITY/TOWN & POSTAL CODE ==========  */}
              <div className={css.cityPostalCode}>
                <fieldset>
                  <legend>
                    <label htmlFor="cityTown">City/Town</label>
                  </legend>

                  <input
                    type="text"
                    id="cityTown"
                    placeholder="City/Town"
                    value={formData.cityTown}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        cityTown: e.target.value,
                      }))
                    }
                    required
                  />
                </fieldset>

                {/* ========== POSTAL CODE ==========  */}
                <fieldset>
                  <legend>
                    <label htmlFor="postalCode">Postal Code</label>
                  </legend>

                  <input
                    type="text"
                    id="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        postalCode: e.target.value,
                      }))
                    }
                    required
                  />
                </fieldset>
              </div>
            </div>

            {/* ========== SPECIAL EDUCATION NEEDS ==========  */}
            <div className={css.specialEducationNeeds}>
              <h2 className="head">
                Special Education Needs <span>*</span>
              </h2>

              <label htmlFor="yes">
                <input
                  type="radio"
                  name="special"
                  id="yes"
                  value="yes"
                  checked={formData.specialEducationNeeds === "yes"}
                  onChange={handleSpecialNeeds}
                />
                <span>Yes</span>
              </label>

              <label htmlFor="no">
                <input
                  type="radio"
                  name="special"
                  id="no"
                  value="no"
                  checked={formData.specialEducationNeeds === "no"}
                  onChange={handleSpecialNeeds}
                  required
                />
                <span>No</span>
              </label>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <fieldset>
              <legend>
                <label htmlFor="specialEducationNeedsComments">If Yes</label>
              </legend>

              <textarea
                value={formData.specialEducationNeedsComments}
                id="specialEducationNeedsComments"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    specialEducationNeedsComments: e.target.value,
                  }))
                }
              ></textarea>
            </fieldset>

            <div className="btns">
              <button onClick={prevPage} className="next-btn">
                Previous
              </button>

              <button type="submit" className="next-btn">
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form4;
