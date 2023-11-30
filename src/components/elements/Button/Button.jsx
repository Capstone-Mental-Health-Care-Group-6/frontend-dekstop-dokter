import React from "react";

const Button = ({type, className, onClick, id, text, svg, svgClassName }) => {
  return (
    <div>

      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
      >
        <div className={svgClassName}>
        {svg}
        <div className="px-2 button-text">
        {text}
        </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
