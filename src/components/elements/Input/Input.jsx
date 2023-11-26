import React from "react";

const Input = ({ type, className, id, onChange, name, placeholder, value }) => {
  return (
    <div>
      <input
        type={type ? type : "text"}
        className={`form-control ${className}`}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
