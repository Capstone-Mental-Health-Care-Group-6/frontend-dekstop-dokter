import React from "react";

const ModalAlertEditArtikel = ({ children, id, size }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex={"-1"}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered   ${size}`}>
          <div className="modal-content">
            {/* <div className="border-0 d-flex justify-content-center position-relative">
              <img src={iconAlert} alt="icon-alert" className="text-center" />
              <Button
                className={"btn-close position-absolute end-0"}
                bsDismiss={"modal"}
                ariaLabel={"Close"}
              />
            </div> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAlertEditArtikel;
