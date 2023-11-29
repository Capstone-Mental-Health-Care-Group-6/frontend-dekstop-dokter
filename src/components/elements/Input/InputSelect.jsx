import React from "react";

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
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
