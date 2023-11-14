import React from "react";
import "./cardLanding.css";

const cardLanding = (props) => {
  console.log(props.data.title);

  return (
    <div>
      <div
        className="card-landing card border-0 text-center bg-transparent"
        data-aos="zoom-in"
      >
        <div className="h-100 d-inline-block my-4">
          <div className="d-flex justify-content-center">
            <div className="circle1">
              <div className="circle2 h-5">
                <img src={props.data.img} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="fw-semibold">{props.data.title}</p>
            <p>{props.data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardLanding;
