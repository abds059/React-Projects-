function LoginForm ( {name, email, setName, setEmail} ) {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length < 3) {
            alert ("Name must be gretaer than 3 characters");
            return;
        }

        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            alert("Invalid email format");
            return;
        }
        alert("Form submitted successfully!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value = {name} onChange={ (e) => setName(e.target.value)} />
            <input type="email" value = {email} onChange = { (e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;