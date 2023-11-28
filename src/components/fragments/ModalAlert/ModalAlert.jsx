import React from "react";
import Button from "../../elements/Button/Button";
import { iconAlertTolakPasien } from "../../../../image";

const ModalAlert = ({ id, size, iconAlert, children }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content">
          <div className="border-0 d-flex justify-content-center position-relative">
            <img src={iconAlert} alt="icon-alert" className="text-center" />
            <Button
              className={"btn-close position-absolute end-0"}
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

export default ModalAlert;
