import React from "react";

const Input = ({
  type,
  className,
  id,
  onChange,
  name,
  placeholder,
  value,
  accept,
}) => {
  return (
    <input
      required
      type={type ? type : "text"}
      className={`form-control ${className}`}
      accept={accept}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
