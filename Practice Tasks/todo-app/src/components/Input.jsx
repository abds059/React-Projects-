function Input ({ setText }) {
    return (
        <input type="text" onChange={ (e) => setText (e.target.value)}/>
    )
}

export default Input;