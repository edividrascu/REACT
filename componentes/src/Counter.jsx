import { useState } from "react"
import CounterDisplay from "./CounterDisplay";
// import "./Counter.css";
function Counter({ valorIni, valorDeAumento }) {
  
  let [counter, setCounter] = useState(valorIni);

  return (
    <div className="container-counter">
      
      <CounterDisplay  counter={counter} />

      {/* Botón de incremento */}
      <button className="boton boton-incremento" onClick={() => setCounter(counter + valorDeAumento)}>
        Aumentar por {valorDeAumento}
      </button>

      {/* Botón de decremento */}
      <button  className="boton boton-decremento" onClick={() => setCounter(counter - valorDeAumento)}>
        decrementar por {valorDeAumento}
      </button>

      {/* Botón de reset */}
      <button className="boton boton-reset" onClick={() => setCounter(valorIni)}>Restablecerr</button>
    </div>
  );
}

export default Counter