import React from "react";
import "./input.css"

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  name = label,
  required = false,
  hint,
  ...restProps
}) => {
  return (
    <>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input"
        id={name}
        type={type}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        {...restProps}
      ></input>
      {hint && <span className="hint">{hint}</span>}
    </>
  );
};

export default Input;
