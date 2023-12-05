import React from "react";

const Checkbox = ({ text, value, onChange }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value={value}
                id="flexCheckDefault"
                onChange={onChange} 
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {text}
            </label>
        </div>
    )
}

export default Checkbox