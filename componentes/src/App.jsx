

import Message from "./Message";
import { HelloWorld } from "./HelloWorld";

export function App() {
  return (
    <div>
      <h1>My awesome react</h1>
      <hr />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <Message />
    </div>
  );
}
// Sí, se puedes usar el componente HelloWorld más de una vez en el componente App. 
// Cada instancia del componente HelloWorld se renderizará de forma independiente.

// Sí,se puedes renderizar el componente Message directamente dentro del componente App.
// Esto mostrará el mensaje "¡Qué hermoso día!" directamente 