import React from "react";
<<<<<<< HEAD
import "./Card.css";

const Card = ({ subtitle, text, rectangle, iconCard }) => {
=======

const Card = ({ subtitle, text, iconCard, bgColor }) => {
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
  return (
    <div className="card rounded-4" style={{ width: "161px", height: "208px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-center position-relative align-items-center w-100 h-50">
<<<<<<< HEAD
          <img
            src={rectangle}
            alt="bg-img"
            className="position-absolute w-100 h-100 background-img"
          />
=======
          <div
            className={"bgCardDashboard position-absolute"}
            style={{ backgroundColor: bgColor }}
          ></div>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
          <div className="position-relative icon-container">
            <img
              src={iconCard}
              alt="card-icon"
              className="position-absolute centered-icon"
            />
          </div>
        </div>
        <div className="card-subtitle text-center">
<<<<<<< HEAD
          <h6 className="">{subtitle}</h6>
        </div>
        <div className="text-center d-flex justify-content-center">
          <h6 className="card-text">{text}</h6>
=======
          <h6 className="fw-semibold">{subtitle}</h6>
        </div>
        <div className="text-center d-flex justify-content-center">
          <h6 className="card-text fw-bold">{text}</h6>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
        </div>
      </div>
    </div>
  );
};

export default Card;
