import React, { useState } from 'react';

function SimpleInput() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <h2>Type something:</h2>
            <input type="text" value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
        </div>
    );
}

export default SimpleInput;
