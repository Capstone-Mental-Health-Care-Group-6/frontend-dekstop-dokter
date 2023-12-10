// ModalProfileSuccess.jsx
import React from "react";
import { successIcon } from "../../../../image";

const ModalProfileSuccess = ({ show, onClose }) => {
  return (
    <div className="modal-profile-success">
      <div className={`modal ${show ? "show" : ""}`} tabIndex={-1} style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={successIcon}
                alt="Logo"
                className="rounded-circle"
                style={{ width: "20px", height: "20px" }}
              />
              <h5 className="modal-title">Data berhasil disimpan.</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
                style={{ width: "10px", height: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfileSuccess;
