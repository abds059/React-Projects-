import { useState } from "react";

function ColorPicker () {
    const [color, setColor] = useState("red");

    return (
        <div style={{backgroundColor: color, padding: "20px"}}>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("grey")}>Grey</button>
        </div>
    )
}

export default ColorPicker;