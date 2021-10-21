import './App.css';
import Info from "./componentes/Info/Info.js";
import Keyboard from "./componentes/Keyboard/Keyboard.js";
import Display from "./componentes/Display/Display.js";
import Action from "./componentes/Action/Action.js";
import {useState} from "react";
import PhoneContext from './PhoneContext';


function App() {

  const [number, setNumber] = useState("");
  const [infoClass, setInfoClass] = useState("message off");
  const [callClass, setCallClass] = useState("call active");
  const [hangClass, setHangClass] = useState("hang active off");
  const [disable, setDisable] = useState("");

  
  const submitDigit = (event) => {
    event.preventDefault();
    if (number.length < 9) { 
      setNumber([...number, event.currentTarget.value]);
    } else {
      setCallClass("call active");
    }
  }

  const deleteLastDigit = (event) => {
    event.preventDefault();
    number.splice(-1)
    setNumber([...number]);
  }

  const call = (event) => {
    event.preventDefault();
    setInfoClass("message");
    setHangClass("hang active"); 
    setCallClass("call active off");
    setDisable(true);
  }
  
 const hang = (event) => {
   event.preventDefault();
   setInfoClass("message off");
   setHangClass("hang active off"); 
   setCallClass("call active");
   setDisable(false);
   setNumber("");
 }

  const contextValue = {phoneNumber: number, 
                        classNameInfo: infoClass, 
                        callClassName: callClass, 
                        hangClassName: hangClass, 
                        disabledState: disable, 
                        actionOnClick: submitDigit,
                        actionOnClickCall: call, 
                        actionOnClickHang: hang,
                        deleteLastDigit: deleteLastDigit};
  
  return (
    <PhoneContext.Provider value={contextValue}>

      <div className="container">
        <Info />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <Display />
            <Action />
          </div>
        </main>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
