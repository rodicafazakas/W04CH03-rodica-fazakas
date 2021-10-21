import { useContext } from 'react';
import PhoneContext from '../../PhoneContext';
import "./Keyboard.css";

const Keyboard = () => {
    const teclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const {actionOnClick, disabledState, deleteLastDigit} = useContext(PhoneContext);

    return (
        <ol className="keyboard">
            {
                teclas.map( (tecla) => <button key={tecla} 
                                               className="key" 
                                               value={tecla} 
                                               onClick={actionOnClick}
                                               disabled={disabledState}>  {tecla}  </button>) 
            }
            <button className="key big" disabled={disabledState} onClick={deleteLastDigit} > DELETE </button>
        </ol>
    )
}

export default Keyboard;