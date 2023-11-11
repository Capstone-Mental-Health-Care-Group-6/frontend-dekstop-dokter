import React from "react";
import Hourglass from "../../../assets/icons/hourglass.png";
import "./cardLanding.css"


const cardLanding = (props) => {
  console.log(props.data.title);

  return (
    <div>
      <div
        className="card border-0 text-center bg-transparent"
        data-aos="zoom-in"
      >
        <div className="d-flex justify-content-center">
          <div className="circle1">
            <div className="circle2">
              <img src={props.data.img} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="fw-semibold">{props.data.title}</p>
          <p>
            {props.data.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default cardLanding;
