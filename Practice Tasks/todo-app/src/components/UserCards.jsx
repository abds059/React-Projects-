function UserCards() {
    return (
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            
            <div style={cardStyle}>
                <img src="./src/images/avatar.avif" alt="user" width="100px"/>
                <h3>Ali</h3>
                <p>Frontend Developer</p>
            </div>

            <div style={cardStyle}>
                <img src="./src/images/avatar.avif" alt="user" width="100px"/>
                <h3>Sara</h3>
                <p>Backend Developer</p>
            </div>

            <div style={cardStyle}>
                <img src="./src/images/avatar.avif" alt="user" width="100px"/>
                <h3>Ahmed</h3>
                <p>UI Designer</p>
            </div>

            <div style={cardStyle}>
                <img src="./src/images/avatar.avif" alt="user" width="100px"/>
                <h3>Ayesha</h3>
                <p>Project Manager</p>
            </div>

            <div style={cardStyle}>
                <img src="./src/images/avatar.avif" alt="user" width="100px"/>
                <h3>Moosa</h3>
                <p>DevOps Engineer</p>
            </div>

            <div style={cardStyle}>
                <img src="./src/images/avatar.avif" alt="user" width="100px"/>
                <h3>Zain</h3>
                <p>QA Tester</p>
            </div>

        </div>
    );
}

const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    width: "150px",
    textAlign: "center"
};

export default UserCards;