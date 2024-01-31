
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My awesome react</h1>
      <hr />
      <HelloWorld />
      <hr />
      <Welcome name="EDDY" age="32" />
      <hr />
      {/* por defecto */}
      <Welcome  />
      
    </div>
  );
}
