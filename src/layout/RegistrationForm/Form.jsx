import { useState } from "react";
import React from "react";
import Form1 from "../../components/Form1/Form1";
import Form2 from "../../components/Form2/Form2";
import Form3 from "../../components/Form3/Form3";
import Form4 from "../../components/Form4/Form4";

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
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

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const pages = [
    <Form1
      formData={formData}
      setFormData={setFormData}
      nextPage={nextPage}
      currentPage={currentPage}
    />,

    <Form2
      formData={formData}
      setFormData={setFormData}
      nextPage={nextPage}
      prevPage={prevPage}
    />,

    <Form3
      formData={formData}
      setFormData={setFormData}
      nextPage={nextPage}
      prevPage={prevPage}
    />,

    <Form4 formData={formData} prevPage={prevPage} setFormData={setFormData} />,
  ];

  return <div>{pages[currentPage]}</div>;
};

export default Form;
