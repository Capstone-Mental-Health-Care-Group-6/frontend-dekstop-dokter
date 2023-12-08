import React from "react";

const ButtonSvg = ({type, className, onClick, id, text, svg, svgClassName, style }) => {
  return (
    <div>

      <button
        type={type ? type : "button"}
        className={className}
        style={style}
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
export default ButtonSvg;