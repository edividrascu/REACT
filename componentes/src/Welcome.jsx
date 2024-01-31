// export function Welcome({name}) {
//    return  <p>welcome ,{name} !</p>
// }
// si  no se le pasa ningun nombre pues queda en blanco por defecto

import Age from "./Age";


// PODEMOS HACER UN PREDETERMINADO SI NO SE LE PASA NADA
export function Welcome({ name = 'alguien'}) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <Age age={21}/>
      {/* no se bien por que se tiene que poner ahora entre llaves */}
    </div>
  );
}

