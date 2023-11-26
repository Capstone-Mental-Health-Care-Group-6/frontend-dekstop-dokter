import React from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="form-label">
        {children}
      </label>
    </div>
  );
};

export default Label;
