import AlertClock from "./AlertClock.jsx";
import Clock from "./Clock.jsx";
import Colors from "./Colors.jsx";
import Container from "./Container.jsx";
import Counter from "./Counter.jsx";
import FocusableInput from "./FocusableInput.jsx";
import { HelloWorld } from "./HelloWorld";
import "./index.css";

import Login from './Login';
import MouseClicker from "./MouseClicker.jsx";
import TodoList from "./TodoList.jsx";
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
  <title>React</title> 
  return (
    <Container className="App" title={<h1>My awesome react</h1>}>
      
      <hr />
      <HelloWorld />
      <hr />
      <Welcome className="Welcome" name="Alfredo" age={19} />
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
      <h1>COLORES</h1>
      <Colors colorArray={color} />
      <hr />
      <TodoList/>
      <hr />
    </Container>
  );
}

