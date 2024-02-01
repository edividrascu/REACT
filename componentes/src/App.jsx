
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My awesome react</h1>
      <hr />
      <HelloWorld />
      <hr />
      <Welcome name="John" age={16} />

      <hr />
      
      
    </div>
  );
}
