import React from 'react';
import { NavLink } from 'react-router-dom';

const CardList = ({ to, list, iconClass }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="list-group list-group-flush">
        <div className="list-group-item">
        <img src={iconClass} alt="Icon" ></img>        
        <NavLink to={to}>{list}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardList;
