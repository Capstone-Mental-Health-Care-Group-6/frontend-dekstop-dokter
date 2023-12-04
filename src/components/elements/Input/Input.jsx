import React from "react";

const Input = ({ type, className, id, onChange, name, placeholder, value }) => {
  return (
<<<<<<< HEAD
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
=======

    <input
      type={type ? type : "text"}
      className={`form-control ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />

>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
  );
};

export default Input;
