import React from "react";

<<<<<<< HEAD
const InputSelect = ({ title, className, name, id, onChange, options }) => {
  return (
    <div>
      <select
        name={name}
        id={id}
        className={`form-select ${className}`}
        ariaLabel="Default select example"
        onChange={onChange}
      >
        <option selected>{title}</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
=======
const InputSelect = ({
  id,
  name,
  title,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} form-select`}
      >
        <option value="">{title}</option>
        {options.map((option) => (
          <option key={option} value={option}>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
