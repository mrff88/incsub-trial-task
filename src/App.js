import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";

const errorMessages = {
  name: "Please enter a name",
  email: "Please enter a valid email address",
  type: "Please select a user type",
  password: "Password must be at least 8 characters",
};

const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const options = ["Developer", "End User"];

function App() {
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    type: false,
    password: false,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const formRef = useRef();

  useEffect(() => {
    const formReady =
      formRef.current[0].value !== "" &&
      formRef.current[1].value !== "" &&
      formRef.current[2].value !== "DEFAULT" &&
      formRef.current[3].value !== "";
    if (formReady) {
      Object.keys(formErrors).filter((item) => formErrors[item] === false)
        .length === Object.keys(formErrors).length
        ? setButtonDisabled(false)
        : setButtonDisabled(true);
    }
  }, [formErrors]);

  const validateFormInput = (e) => {
    let error = false;
    switch (e.target.id) {
      case "email":
        regexEmail.test(e.target.value) === false && (error = true);
        break;
      case "type":
        e.target.value === "DEFAULT" && (error = true);
        break;
      case "password":
        e.target.value.length < 8 && (error = true);
        break;
      default:
        e.target.value.length === 0 && (error = true);
        break;
    }
    setFormErrors({ ...formErrors, [e.target.id]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formRef.current[0].value,
      email: formRef.current[1].value,
      type: formRef.current[2].value,
      password: formRef.current[3].value,
    };
    console.log(data);
  };

  return (
    <div className="layout">
      <div className="layout__block layout__block--left">
        <div className="layout__block layout__block--top">
          <div className="container container--top">
            <p className="text text--bold">Step 1 of 3</p>
            <div className="steps">
              <div className="steps__dot steps__dot--active"></div>
              <div className="steps__dot"></div>
              <div className="steps__dot"></div>
            </div>
          </div>
        </div>
        <div className="layout__block layout__block--bottom">
          <section className="container container--left">
            <h2 className="heading">Let’s set up your account</h2>
            <p className="text">
              Already have an account?{" "}
              <a className="link" href="__blank">
                Sign in
              </a>
            </p>
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="form"
              action="form"
            >
              <FormInput
                type={"text"}
                validate={validateFormInput}
                label={"Your name"}
                id={"name"}
                error={formErrors.name}
                errorMessage={errorMessages.name}
              />
              <FormInput
                type={"email"}
                validate={validateFormInput}
                label={"Email address"}
                id={"email"}
                error={formErrors.email}
                errorMessage={errorMessages.email}
              />
              <FormSelect
                validate={validateFormInput}
                id={"type"}
                options={options}
                error={formErrors.type}
                errorMessage={errorMessages.type}
              />
              <FormInput
                type={"password"}
                helpText={"Minimum 8 characters"}
                validate={validateFormInput}
                label={"Password"}
                id={"password"}
                error={formErrors.password}
                errorMessage={errorMessages.password}
              />
              <button
                className={`form__button${
                  !buttonDisabled ? " form__button--active" : ""
                }`}
                disabled={buttonDisabled}
              >
                Next
              </button>
            </form>
            <p className="text text--end">
              By clicking the “Next” button, you agree to creating a free
              account, and to{" "}
              <a className="link" href="__blank">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="link" href="__blank">
                Privacy Policy.
              </a>
            </p>
          </section>
        </div>
      </div>
      <div className="layout__block layout__block--right">
        <section className="container container--right">
          <h2 className="heading heading--left">Dummy Heading</h2>
          <p className="text text--big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
