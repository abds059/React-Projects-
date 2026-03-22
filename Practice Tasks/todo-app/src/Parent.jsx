import { useState } from "react"
import Child from './Child'

function Parent () {
    const [theme, setTheme] = useState ("light");

    return (
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Change Theme
            </button>
            <Child theme = {theme}></Child>
        </div>
    )
}

export default Parent;