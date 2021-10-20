const Keyboard = ({actionOnClick, disabledState}) => {
    const teclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "DELETE"];

    return (
        <ol className="keyboard">
            {
                teclas.map( (tecla) => <button key={tecla} className="key" 
                                               value={tecla} 
                                               onClick={actionOnClick}
                                               disabled={disabledState}> {tecla} </button>) 
            }
        </ol>
    )
}

export default Keyboard;