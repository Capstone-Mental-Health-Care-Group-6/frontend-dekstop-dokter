import React from "react";

const CardSaldo = ({ className, imgSrc, title, subTitle }) => {
  return (
    <div
      className={`${className} bg-white border-0 rounded-2 bg-white border-0 d-flex justify-content-center align-items-center`}
    >
      <div className="d-flex flex-row justify-content-center gap-3 align-items-center">
        <div className="">
          <img src={imgSrc} alt="icon-card" />
        </div>
        <div className="mt-3">
          <p className="fw-semibold">
            {title}{" "}
            <span className="fw-bold">
              <br />
              {subTitle}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSaldo;
