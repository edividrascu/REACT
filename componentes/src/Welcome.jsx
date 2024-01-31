// export function Welcome({name}) {
//    return  <p>welcome ,{name} !</p>
// }
// si  no se le pasa ningun nombre pues queda en blanco por defecto


// PODEMOS HACER UN PREDETERMINADO SI NO SE LE PASA NADA
export function Welcome({ name = 'alguien!!!' }) {
    return <p>Welcome, {name}!</p>;
  }

