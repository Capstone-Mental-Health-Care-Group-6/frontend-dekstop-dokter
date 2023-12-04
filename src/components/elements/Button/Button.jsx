import React from "react";

<<<<<<< HEAD
const Button = ({type, className, onClick, id, text, svg, svgClassName }) => {
  return (
    <div>

=======
const Button = ({
  type,
  className,
  onClick,
  id,
  text,
  bsTogle,
  bsTarget,
  bsDismiss,
  ariaLabel,
}) => {
  return (
    <div>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
<<<<<<< HEAD
      >
        <div className={svgClassName}>
        {svg}
        <div className="px-2 button-text">
        {text}
        </div>
        </div>
=======
        data-bs-toggle={bsTogle}
        aria-label={ariaLabel}
        data-bs-target={bsTarget}
        data-bs-dismiss={bsDismiss}
      >
        {text}
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
      </button>
    </div>
  );
};

export default Button;
