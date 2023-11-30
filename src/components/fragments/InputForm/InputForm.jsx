import React from "react";
import Label from "../../elements/Input/Label";
import Input from "../../elements/Input/Input";
import "./InputForm.css";

const InputForm = ({
  type,
  label,
  name,
  id,
  className,
  placeholder,
  onChange,
  value,
  inputIcon,
  alt,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="d-flex align-items-center position-relative">
        <img src={inputIcon} alt={alt} className="icon position-absolute " />

        <Input
          type={type ? type : "text"}
          className={className}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputForm;
