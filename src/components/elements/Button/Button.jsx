import React from "react";

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
      <button
        type={type ? type : "button"}
        className={className}
        onClick={onClick}
        id={id ? id : ""}
        data-bs-toggle={bsTogle}
        aria-label={ariaLabel}
        data-bs-target={bsTarget}
        data-bs-dismiss={bsDismiss}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
