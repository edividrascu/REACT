// export function Welcome({name}) {
//    return  <p>welcome ,{name} !</p>
// }
// si  no se le pasa ningun nombre pues queda en blanco por defecto


// PODEMOS HACER UN PREDETERMINADO SI NO SE LE PASA NADA
export function Welcome({ name = 'alguien', age = 100 }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <p>Your age is: {age}.</p>
    </div>
  );
}

