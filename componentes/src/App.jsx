
import AlertClock from "./AlertClock.jsx";
import { HelloWorld } from "./HelloWorld";
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
    </div>
  );
}
