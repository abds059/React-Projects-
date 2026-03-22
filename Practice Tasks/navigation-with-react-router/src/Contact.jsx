function Contact() {
    return (
        <form style={{border : "2px solid black", padding: "20px", borderRadius : "12px"}}>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Name" /><br />
            <input type="email" placeholder="Email" /><br />
            <textarea placeholder="Message"></textarea><br />
            <button>Send</button>
        </form>
    );
}

export default Contact;