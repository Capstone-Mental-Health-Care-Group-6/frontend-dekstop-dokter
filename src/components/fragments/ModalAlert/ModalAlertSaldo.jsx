import React from "react";
import Button from "../../elements/Button/Button";

const ModalAlertSaldo = ({ id, size, children }) => {
  return (
    <div
      className="modal fade modal__alert__saldo"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content rounded-4 p-4">
          <div className="border-0 position-relative ">
            <Button
              className={"btn-close position-absolute end-0 "}
              bsDismiss={"modal"}
              ariaLabel={"Close"}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalAlertSaldo;
