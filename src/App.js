import './App.css';
import Info from "./componentes/Info/Info.js";
import Keyboard from "./componentes/Keyboard/Keyboard.js";
import Display from "./componentes/Display/Display.js";

function App() {
  return (
     <div class="container">
      <Info/>
      <main class="phone">
        <div class="keyboard-container">
          <Keyboard />
        </div>
        <div class="actions">
          <Display />
          <button class="call">Call</button>
          <button class="hang active">Hang</button>
        </div>
      </main>
    </div>
  );
}

export default App;
