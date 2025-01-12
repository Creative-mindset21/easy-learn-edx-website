import FormHeader from "../FormHeader/FormHeader";
import css from "./form3.module.css";

const Form3 = ({ formData, setFormData, nextPage, prevPage }) => {
  //! ===== HANDLE SUBMIT ===== //
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
            <div className={css.details}>
              <h2 className="head">
                Parent details <span>*</span>
              </h2>

              {/* ========== NAMES ==========  */}
              <fieldset>
                <legend>
                  <label htmlFor="parentFirstName">First Name</label>
                </legend>
                <input
                  type="text"
                  name=""
                  id="parentFirstName"
                  placeholder="Enter first name"
                  value={formData.parentFirstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      parentFirstName: e.target.value,
                    }))
                  }
                  required
                />
              </fieldset>

              <fieldset>
                <legend>
                  <label htmlFor="parentLastName">Last Name</label>
                </legend>

                <input
                  type="text"
                  id="parentLastName"
                  placeholder="Enter last name"
                  value={formData.parentLastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      parentLastName: e.target.value,
                    }))
                  }
                  required
                />
              </fieldset>

              {/* ========== PHONE NUMBER ==========  */}
              <fieldset>
                <legend>
                  <label htmlFor="parentPhoneNumber">Mobile Number</label>
                </legend>

                <input
                  type="number"
                  id="parentPhoneNumber"
                  placeholder="Enter phone number"
                  value={formData.parentPhoneNumber}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      parentPhoneNumber: e.target.value,
                    }))
                  }
                  required
                />
              </fieldset>

              {/* ========== EMAIL ADDRESS ==========  */}
              <fieldset>
                <legend>
                  <label htmlFor="parentEmailAddress">Email Address</label>
                </legend>

                <input
                  type="email"
                  id="parentEmailAddress"
                  placeholder="Enter email address"
                  value={formData.parentEmailAddress}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      parentEmailAddress: e.target.value,
                    }))
                  }
                  required
                />
              </fieldset>

              {/* ========== ETHNIC BACKGROUND ==========  */}
              <fieldset>
                <legend>
                  <label htmlFor="ethnicBackground">Ethnic Background</label>
                </legend>

                <select
                  value={formData.ethnicBackground}
                  id="ethnicBackground"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      ethnicBackground: e.target.value,
                    }))
                  }
                  required
                >
                  <option value="" disabled="disabled">
                    -- select one --
                  </option>

                  <optgroup label="White">
                    <option value="White English">English</option>
                    <option value="White Welsh">Welsh</option>
                    <option value="White Scottish">Scottish</option>
                    <option value="White Northern Irish">Northern Irish</option>
                    <option value="White Irish">Irish</option>
                    <option value="White Gypsy or Irish Traveller">
                      Gypsy or Irish Traveller
                    </option>
                    <option value="White Other">
                      Any other White background
                    </option>
                  </optgroup>

                  <optgroup label="Mixed or Multiple ethnic groups">
                    <option value="Mixed White and Black Caribbean">
                      White and Black Caribbean
                    </option>
                    <option value="Mixed White and Black African">
                      White and Black African
                    </option>
                    <option value="Mixed White Other">
                      Any other Mixed or Multiple background
                    </option>
                  </optgroup>

                  <optgroup label="Asian">
                    <option value="Asian Indian">Indian</option>
                    <option value="Asian Pakistani">Pakistani</option>
                    <option value="Asian Bangladeshi">Bangladeshi</option>
                    <option value="Asian Chinese">Chinese</option>
                    <option value="Asian Other">
                      Any other Asian background
                    </option>
                  </optgroup>

                  <optgroup label="Black">
                    <option value="Black African">African</option>
                    <option value="Black African American">
                      African American
                    </option>
                    <option value="Black Caribbean">Caribbean</option>
                    <option value="Black Other">
                      Any other Black background
                    </option>
                  </optgroup>

                  <optgroup label="Other ethnic groups">
                    <option value="Arab">Arab</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Latino">Latino</option>
                    <option value="Native American">Native American</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Other">Any other ethnic group</option>
                  </optgroup>
                </select>
              </fieldset>
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

export default Form3;
