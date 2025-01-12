import FormHeader from "../FormHeader/FormHeader";
import css from "./form1.module.css";

const Form1 = ({ formData, setFormData, nextPage }) => {
  //! ===== HANDLE GENDER RADIO BUTTONS ===== //
  const handleGender = (e) => {
    setFormData((prev) => ({ ...prev, sex: e.target.value }));
  };

  //! ===== HANDLE NEXT PAGE BUTTONS ===== //
  const handleSubmit = (e) => {
    e.preventDefault();
    nextPage();
  };

  return (
    <>
      <FormHeader />

      <section className="forms">
        <div className="container">
          <form action="" className="form" onSubmit={handleSubmit}>
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
                  required
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
                  required
                />
              </fieldset>
            </div>

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
                  required
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
                  required
                />
              </fieldset>
            </div>

            <button type="submit" className="next-btn">
              Next
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form1;
