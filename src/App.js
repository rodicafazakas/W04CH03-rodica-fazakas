import './App.css';
import Info from "./componentes/Info/Info.js";
import Keyboard from "./componentes/Keyboard/Keyboard.js";
import Display from "./componentes/Display/Display.js";
import {useState} from "react";

function App() {
  const [number, setNumber] = useState("");

  const submitDigit = (event) => {
    event.preventDefault();
    setNumber([...number, event.currentTarget.value]);
  }

  return (
     <div className="container">
      <Info/>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard actionOnClick={submitDigit}/>
        </div>
        <div className="actions">
          <Display phoneNumber={number} />
          <button className="call">Call</button>
          <button className="hang active">Hang</button>
        </div>
      </main>
    </div>
  );
}

export default App;
