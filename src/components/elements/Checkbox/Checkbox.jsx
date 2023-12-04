import React from "react";

const Checkbox = ({ text }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {text}
            </label>
        </div>
    )
}

export default Checkbox