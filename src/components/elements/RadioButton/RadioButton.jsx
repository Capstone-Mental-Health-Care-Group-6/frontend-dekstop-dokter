import React from "react";

const RadioButton = ({ text, value, deskripsi, onChange }) => {
    return (
        <div className="form-check-radio">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={value}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                {text}
            </label>
            <div className="form-check-deskripsi">
                {deskripsi}
            </div>
        </div>
    )
}

export default RadioButton