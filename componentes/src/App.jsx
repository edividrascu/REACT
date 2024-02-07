import AlertClock from "./AlertClock.jsx";
import Clock from "./Clock.jsx";
import Colors from "./Colors.jsx";
import Counter from "./Counter.jsx";
import FocusableInput from "./FocusableInput.jsx";
import { HelloWorld } from "./HelloWorld";

import Login from './Login';
import MouseClicker from "./MouseClicker.jsx";
import { UncontrolledLogin } from "./UncontrolledLogin.jsx";
import { Welcome } from "./Welcome";

export function App() {
  const color = [
    { id: 1, name: 'Negro' },
    { id: 2, name: 'Gris' },
    { id: 3, name: 'Rosa' },
  ];
  function fechaApp() {
    const data = new Date()
    alert(data)
  }
  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <div>
      <h1>My awesome react</h1>
      <hr />
      <h1>COLORES</h1>
      <Colors colorArray={color} />
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
      <Login onLogin={handleLogin} />
      {/* <UncontrolledLogin/> */}
      <br />
      <FocusableInput/>
      <hr />
      
    </div>
  );
}

