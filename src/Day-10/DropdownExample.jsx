import React, { useState } from 'react';

function DropdownExample() {
    const [selectedOption, setSelectedOption] = useState("");

    function handleSelectChange(event) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <p>You selected: {selectedOption}</p>
        </div>
    );
}

export default DropdownExample;
