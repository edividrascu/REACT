import AlertClock from "./AlertClock.jsx";
import Clock from "./Clock.jsx";
import Counter from "./Counter.jsx";
import { HelloWorld } from "./HelloWorld";

import Login from "./Login.jsx";
import MouseClicker from "./MouseClicker.jsx";
import { Welcome } from "./Welcome";

export function App() {
  function fechaApp() {
    const data = new Date()
    alert(data)
  }

  return (
    <div>
      <h1>My awesome react</h1>
      <hr />
      <HelloWorld />
      <hr />
      <Welcome name="John" age={16} />
      <hr />
      <AlertClock dataAlert={fechaApp} />
      <hr />
      <Counter valorIni={0} valorDeAumento={10}/>
      <hr />
      <Clock/>
      <hr />
      <MouseClicker/>
      <hr />
      <Login/>

    </div>
  );
}

