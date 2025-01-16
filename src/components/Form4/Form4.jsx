/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import css from "./form4.module.css";
import FormHeader from "../FormHeader/FormHeader";
import { useNavigate } from "react-router-dom";

const Form4 = ({ formData, prevPage, setFormData }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state for form submission

  //! ===== HANDLE FORM SUBMIT ===== //
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();

    if (
      formData.specialEducationNeeds === "yes" &&
      formData.specialEducationNeedsComments === ""
    ) {
      setError("Please enter a comment");
    } else {
      setError("");
      navigate("/pricing");

      // Set loading state to true before submitting the form
      setLoading(true);

      try {
        // Make API call by sending individual fields one by one in the body
        const response = await fetch(
          "https://edubackend-zs7x.onrender.com/v1/create-student",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: formData.firstName,
              last_name: formData.lastName,
              sex: formData.sex,
              dob: formData.dob, // Make sure dob is formatted as a string in 'YYYY-MM-DD'
              school_year_group: formData.schoolYearGroup,
              school_name: formData.schoolName,
              interested_courses: formData.interestedCourses || null, // Optional
              examination_boards: formData.examinationBoards || null, // Optional
              parent_first_name: formData.parentFirstName,
              parent_last_name: formData.parentLastName,
              parent_phone_number: formData.parentPhoneNumber,
              parent_email_address: formData.parentEmailAddress,
              ethnic_background: formData.ethnicBackground || null, // Optional
              home_address: formData.homeAddress || null, // Optional
              city_town: formData.cityTown,
              postal_code: formData.postalCode,
              special_education_needs: formData.specialEducationNeeds || null, // Optional
              special_education_needs_comments:
                formData.specialEducationNeedsComments || null, // Optional
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Form submission failed. Please try again.");
        }

        // Handle successful form submission
        const result = await response.json();
        console.log("Form submitted successfully:", result);

        // Optionally reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          sex: "",
          dob: "",
          schoolYearGroup: "",
          schoolName: "",
          interestedCourses: "",
          examinationBoards: "",
          parentFirstName: "",
          parentLastName: "",
          parentPhoneNumber: "",
          parentEmailAddress: "",
          ethnicBackground: "",
          homeAddress: "",
          cityTown: "",
          postalCode: "",
          specialEducationNeeds: "",
          specialEducationNeedsComments: "",
        });
      } catch (error) {
        setError("An error occurred. Please try again.");
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false); // Reset loading state after request completion
      }
    }
  };

  //! ===== HANDLE SPECIAL NEEDS ===== //
  const handleSpecialNeeds = (e) => {
    setFormData((prev) => ({ ...prev, specialEducationNeeds: e.target.value }));
  };

  return (
    <>
      <FormHeader />

      <section className="forms">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
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

              <button type="submit" className="next-btn" disabled={loading}>
                {loading ? "Submitting..." : "Complete Registration"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form4;
