import React from "react";

const TextArea = ({ className, name, id, cols, rows }) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      className={`form-control ${className}`}
    ></textarea>
  );
};

export default TextArea;
