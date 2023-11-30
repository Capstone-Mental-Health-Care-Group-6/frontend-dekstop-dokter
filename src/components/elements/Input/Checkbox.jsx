import React from "react";

const Checkbox = ({ classNameLabel, value, id, text, index }) => {
  return (
    <div className="py-1">
      <div index={index} className="form-check">
        <input
          type="checkbox"
          defaultValue={value}
          id={id}
          className={`form-check-input border-2`}
        />
        <label  className={`form-check-label ${classNameLabel}`} htmlFor={id}>
          {text}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
