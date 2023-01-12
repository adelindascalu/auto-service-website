import "./CtaForm.css";
import Button from "./Reusable-components/Button/Button";
import FormInput from "./Reusable-components/Form/FormInput";
import { useEffect, useState } from "react";
import { app, db } from "./Firebase/Firebase";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import RequestButton from "./Reusable-components/RequestButton/RequestButton";

export default function CtaForm() {
  const [values, setValues] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    vehicle: "",
    service: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (
      values.firstname &&
      values.surname &&
      values.email &&
      values.phone &&
      values.date &&
      values.time
    ) {
      setIsButtonEnabled(true);
    } else setIsButtonEnabled(false);
  }, [values]);

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage: "Please insert your first name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "surname",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Please insert your last name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid email address",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "tel",
      placeholder: "+40xxxxxxxxx",
      errorMessage: "Invalid phone number",
      pattern: "[0-9]{10,}",
      label: "Phone Number",
      required: true,
    },
    {
      id: 5,
      name: "date",
      type: "date",
      placeholder: "Date",
      errorMessage: "Please choose a date",
      label: "Date",
      required: true,
    },
    {
      id: 6,
      name: "time",
      type: "time",
      placeholder: "Time",
      errorMessage: "Please choose a time",
      label: "Time",
      required: true,
    },
    {
      id: 7,
      name: "vehicle",
      type: "text",
      placeholder: "Vehicle",

      label: "Vehicle",
      required: false,
    },
    {
      id: 8,
      name: "service",
      type: "text",
      placeholder: "Desired service",

      label: "Desired service",
      required: false,
    },
  ];

  // const [popUp, setPopUp] = useState(false);
  // const handlePopUp = () => setPopUp(!popUp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addDoc(collection(db, "inputs"), {
      ...values,
      timestamp: serverTimestamp(),
    });
    setValues({
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      vehicle: "",
      service: "",
    });
  };

  const handleInputs = function (e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);
  return (
    <>
      <section className='section-cta'>
        <div className='container cta'>
          <h2 className='heading-secondary'>Book an appointment</h2>
          <form id='cta-form' className='cta-form' onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleInputs}
              />
            ))}
          </form>
          <RequestButton
            type='btn-light submit'
            text='Book Now'
            onSubmit={handleSubmit}
            disabled={!isButtonEnabled}
          />
        </div>
      </section>
    </>
  );
}
