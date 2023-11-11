import React from "react";

const Button = ({type, className, onClick, id, text }) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
