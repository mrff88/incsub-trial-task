import React, { useState } from "react";

const FormInput = ({
  type,
  validate,
  label,
  id,
  helpText,
  error,
  errorMessage,
}) => {
  const [inputType] = useState(type);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="form__input-group">
      <input
        className={`form__input-area${error ? " form__input-area--error" : ""}`}
        type={inputType}
        value={inputValue}
        name="form-input"
        id={id}
        onChange={handleChange}
        onBlur={validate}
        required
      />
      <label
        className={`form__input-label${
          error ? " form__input-label--error" : ""
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      {error && <span className="form__input-error">{errorMessage}</span>}
      {helpText && !error && (
        <span className="form__input-helper">{helpText}</span>
      )}
    </div>
  );
};

export default FormInput;
