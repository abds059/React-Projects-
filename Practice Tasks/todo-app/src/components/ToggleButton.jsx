import { useState } from "react";

function ToggleButton () {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)} style={{ backgroundColor: "lightgray", padding: "10px", border: "2px solid black", borderRadius: "6px"}}>
                {show ? "Hide" : "Show"}
            </button>
        </div>
    )
}

export default ToggleButton;