import React, { useState } from 'react';

function CheckboxExample() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
    }

    return (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <label style={{ marginLeft: "10px", fontSize: "20px" }}>
                {isChecked ? "✅ Checked" : "☐ Unchecked"}
            </label>
        </div>
    );
}

export default CheckboxExample;
