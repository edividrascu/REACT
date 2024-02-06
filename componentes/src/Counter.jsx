import { useEffect, useState , useRef } from "react"
import CounterDisplay from "./CounterDisplay";
import "./Counter.css";
function Counter({ valorIni, valorDeAumento }) {
  // Inicializa el estado para el contador
  const [counter, setCounter] = useState(valorIni);
  const prevCounterRef = useRef(counter);
  // aqui almacenamos la direccion de hacia donde va el contaador
  const changeDirectionRef = useRef(null);
  useEffect(() => {
 
    if (counter > prevCounterRef.current) {
      changeDirectionRef.current = "SUBIENDO";
    } else if (counter < prevCounterRef.current) {
      changeDirectionRef.current = "BAJANDO";
    }


    if (changeDirectionRef.current !== null) {
      console.log("Dirección del cambio:", changeDirectionRef.current);
    }

    prevCounterRef.current = counter;
  }, [counter]);

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