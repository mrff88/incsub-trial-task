import React from "react";

const FormSelect = ({
  options,
  validate,
  id,
  helpText,
  error,
  errorMessage,
}) => {
  return (
    <div className="form__input-group">
      <select
        id={id}
        onBlur={validate}
        className={`form__input-select${
          error ? " form__input-select--error" : ""
        }`}
        defaultValue={"DEFAULT"}
        required
      >
        {Object.keys(options).map((item, index) => {
          return index === 0 ? (
            <React.Fragment key={index}>
              <option key={index} value={"DEFAULT"} disabled>
                I would describe my user type as
              </option>
              <option key={index + 1} value={options[item]}>
                {options[item]}
              </option>
            </React.Fragment>
          ) : (
            <option key={index + 1} value={options[item]}>
              {options[item]}
            </option>
          );
        })}
      </select>
      {error && <span className="form__input-error">{errorMessage}</span>}
      {helpText && !error && (
        <span className="form__input-helper">{helpText}</span>
      )}
    </div>
  );
};

export default FormSelect;
