import { useState } from "react";
import AlertClock from "./AlertClock.jsx";
import Clock from "./Clock.jsx";
import Colors from "./Colors.jsx";
import Container from "./Container.jsx";
import Counter from "./Counter.jsx";
import FocusableInput from "./FocusableInput.jsx";
import { HelloWorld } from "./HelloWorld";
import "./index.css";
import LanguageContext from "./LanguageContext.jsx";

import Login from './Login';
import MouseClicker from "./MouseClicker.jsx";
import TodoList from "./TodoList.jsx";
import { UncontrolledLogin } from "./UncontrolledLogin.jsx";
import { Welcome } from "./Welcome";
import GithubUsers from "./GithubUsers.jsx";
import LocationComponent from "./LocationComponent.jsx";

export function App() {
  const [lenguage,setLenguage]= useState('en')
  function handleSetLenguage(language) {
    setLenguage(language); 
  }
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
        <Counter valorIni={0} valorDeAumento={1}/>
        <hr />
        <div>
        <select name="selectLenguage" id="" onChange={(e) => handleSetLenguage(e.target.value)}>
          <option value="es">ES</option>
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>
          <LanguageContext.Provider value={lenguage}>
            <Clock />
          </LanguageContext.Provider>
        </div>
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
        <GithubUsers />
        <LocationComponent/>
    </Container>
  );
}

