import React from 'react';
import "./Filter.style.css";
import { FaFilter } from 'react-icons/fa';

function Filter({ size, placeholder, onClick }) {
    return (
        <div className="filter-container">
            <button
                className="filter__button w-100"
                onClick={onClick}>
                <FaFilter className="filter__icon" size={size} />
                <span className="filter__text">{placeholder}</span>
            </button>
        </div>
    )
}

export default Filter;
