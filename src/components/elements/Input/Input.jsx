import React from "react";

const Input = ({ type, className, id, onChange, name, placeholder, value }) => {
  return (
    <input
      type={type ? type : "text"}
      className={`form-control ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
