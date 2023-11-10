import React from "react";
import "./Card.css";

const Card = ({ subtitle, text, rectangle, iconCard }) => {
  return (
    <div className="card rounded-4" style={{ width: "161px", height: "208px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-center position-relative align-items-center w-100 h-50">
          <img
            src={rectangle}
            alt="bg-img"
            className="position-absolute w-100 h-100 background-img"
          />
          <div className="position-relative icon-container">
            <img
              src={iconCard}
              alt="card-icon"
              className="position-absolute centered-icon"
            />
          </div>
        </div>
        <div className="card-subtitle text-center">
          <h6 className="">{subtitle}</h6>
        </div>
        <div className="text-center d-flex justify-content-center">
          <h6 className="card-text">{text}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
