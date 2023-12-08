import React from 'react';
import "./Search.style.css";
import { FaSearch } from 'react-icons/fa';

function Search({ size, placeholder, value, onChange }) {
    return (
        <div className="search-container">
            <div className="search__input-container">
                <FaSearch className="search__icon" size={size} />
                <input
                    type="text"
                    className="search__input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default Search;
