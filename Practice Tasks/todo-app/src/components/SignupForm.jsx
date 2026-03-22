import { useState } from "react";

function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageCode, setImageCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !imageCode) {
            alert("All fields are required");
            return;
        }

        alert("Form Submitted");
    };

    return (
        <div className="container">
            <h2>Please <p className="bluepara">Signup</p></h2>
            <p>If you are not already Registered</p>

            <form onSubmit={handleSubmit}>
                <label>User Id :</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password :</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <small>(Password is case sensitive)</small>

                <label>Image Code :</label>
                <input
                    type="text"
                    value={imageCode}
                    onChange={(e) => setImageCode(e.target.value)}
                />

                <div className="captcha">
                    <button type="button">Change Code</button>
                    <div className="code">m9me5</div>
                    <button type="submit">Login</button>
                </div>

                <p className="forgot">Forgot Password?</p>
            </form>
        </div>
    );
}

export default SignupForm;