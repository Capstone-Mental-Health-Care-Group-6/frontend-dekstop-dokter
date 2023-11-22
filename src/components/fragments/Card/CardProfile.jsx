import React from "react";

const CardProfile = ({ titleProfile, textProfile }) => {
  return (
    <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{titleProfile}</h5>
                    <p className="card-text">{textProfile}</p>
                    <p className="card-text">{textProfile}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardProfile;
