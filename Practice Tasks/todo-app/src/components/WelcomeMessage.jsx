function Welcome() {
    
    let date = new Date()

    return (
        <div>
            <p>{date.toString()}</p>
        </div>
    )
}

export default Welcome;