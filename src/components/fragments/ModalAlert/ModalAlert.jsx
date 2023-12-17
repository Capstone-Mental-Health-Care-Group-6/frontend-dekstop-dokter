import React from "react";

function ModalAlert({ children, id, size }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={"-1"}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered   ${size}`}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default ModalAlert;
