import FormHeader from "../FormHeader/FormHeader";
import css from "./form1.module.css";

const Form1 = ({ formData, setFormData, nextPage, currentPage }) => {
  const handleGender = (e) => {
    setFormData((prev) => ({ ...prev, sex: e.target.value }));
  };

  return (
    <>
      <FormHeader />

      <section className="forms">
        <div className="container">
          <form
            action=""
            className="form"
            onSubmit={(e) => {
              e.preventDefault;
              nextPage();
            }}
          >
            {/* ========== NAMES ==========  */}
            <div className={css.name}>
              <h2 className="head">
                Child's Name <span>*</span>
              </h2>

              <fieldset>
                <legend>
                  <label htmlFor="firstName">First Name</label>
                </legend>
                <input
                  type="text"
                  name=""
                  id="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />
              </fieldset>

              <fieldset>
                <legend>
                  <label htmlFor="lastName">Last Name</label>
                </legend>

                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />
              </fieldset>
            </div>

            {/* ========== NAMES ==========  */}

            {/* ========== GENDER ==========  */}
            <div className={css.gender}>
              <h2 className="head">
                Sex <span>*</span>
              </h2>

              <label htmlFor="male">
                <input
                  type="radio"
                  name="sex"
                  id="male"
                  value="male"
                  checked={formData.sex === "male"}
                  onChange={handleGender}
                />
                <span>Male</span>
              </label>

              <label htmlFor="female">
                <input
                  type="radio"
                  name="sex"
                  id="female"
                  value="female"
                  checked={formData.sex === "female"}
                  onChange={handleGender}
                />
                <span>Female</span>
              </label>

              <label htmlFor="other">
                <input
                  type="radio"
                  name="sex"
                  id="other"
                  value="other"
                  checked={formData.sex === "other"}
                  onChange={handleGender}
                />
                <span>Other</span>
              </label>
            </div>
            {/* ========== GENDER ==========  */}

            {/* ========== DATE OF BIRTH ==========  */}
            <div className={css.dob}>
              <h2 className="head">
                Date of Birth <span>*</span>
              </h2>

              <fieldset>
                <legend>
                  <label htmlFor="dob">Date of Birth</label>
                </legend>

                <input
                  type="date"
                  id="dob"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }))
                  }
                />
              </fieldset>
            </div>

            <button type="submit" className="next-btn">
              Next: Enter School Details
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form1;
