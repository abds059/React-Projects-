function Navbar () {
    return (
        <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
            <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;