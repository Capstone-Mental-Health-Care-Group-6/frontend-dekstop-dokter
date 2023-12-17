import React from "react";

const Checkbox = ({ classNameLabel, disabled, onChange, value, id, text, index, checked}) => {
  return (
    <div className="py-1">
      <div index={index} className="form-check">
        <input
          type="checkbox"
          defaultValue={value}
          id={id}
          checked={checked}
          value={value}
          className={`form-check-input border-2`}
          onChange={onChange}
          disabled={disabled}
        />
        <label className={`form-check-label ${classNameLabel}`} htmlFor={id}>
          {text}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
