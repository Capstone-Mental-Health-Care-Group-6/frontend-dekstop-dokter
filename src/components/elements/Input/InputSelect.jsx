import React from "react";

const InputSelect = ({ title, className, name, id, onChange, options }) => {
  return (
    <div>
      <select
        name={name}
        id={id}
        className={`form-select ${className}`}
        aria-label="Default select example"
        onChange={onChange}
      >
        <option selected>{title}</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
