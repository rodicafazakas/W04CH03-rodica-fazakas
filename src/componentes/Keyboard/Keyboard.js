const Keyboard = () => {
    const teclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "DELETE"];

    return (
        <ol class="keyboard">
            {
                teclas.map( (tecla) => <button key={tecla} className="key" value={tecla}> {tecla} </button>) 
            }
        </ol>
    )
}

export default Keyboard;