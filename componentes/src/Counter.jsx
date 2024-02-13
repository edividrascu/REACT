import useCounter from './useCounter'; 
import CounterDisplay from "./CounterDisplay";
import "./index.css";

function Counter({ valorIni, valorDeAumento }) {
  const { count, increment, decrement, reset } = useCounter(valorIni);

  return (
    <div className="container-counter">
      <CounterDisplay counter={count} />

      {/* Botón de incremento */}
      <button className="boton boton-incremento" onClick={() => increment(valorDeAumento)}>
  Aumentar por {valorDeAumento}
</button>

      {/* Botón de decremento */}
      <button className="boton boton-decremento" onClick={decrement}>
        Decrementar por {valorDeAumento}
      </button>

      {/* Botón de reset */}
      <button className="boton boton-reset" onClick={reset}>
        Restablecer
      </button>
    </div>
  );
}

export default Counter;