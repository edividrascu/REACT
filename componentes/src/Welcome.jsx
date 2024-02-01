
import Age from './Age';


export function Welcome({ name = 'Anonimo', age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>

      {/* Primera condición El Age componente se renderiza solo si la agepropiedad es mayor o igual  que 18 de lo contrario You are very young! .*/}
      {age >= 18 ? (
        <div>
          <p>Eres mayor o igual a 18 años.</p>
          <Age age={age} />
        </div>
      ) : (
        <div>
          <p> <strong>You are very young!</strong></p>
          
          
        </div>
      )}

      {/* Segunda condición  El Age componente se renderiza sólo si el ageaccesorio está presente.*/}
      {age !== undefined && (
        <div>
          <p>La edad está definida.</p>
          
        </div>
      )}

      {/* Tercera condición Si la edad esta entre 18 y 65  */}
      {age >= 18 && age <= 65 && (
        <div>
          <p>La edad está entre 18 y 65 años.</p>
          <Age age={age} />
        </div>
      )}
      {/* Cuarta condición El Age componente se representa solo si el age accesorio es mayor que 18, menor que 65 y el name accesorio es igual a "John". */}
      {age >= 18 && age <= 65 && name === "John" && (
        <div>
          <p>La edad está entre 18 y 65 años y el usuario se llama John</p>
          <Age age={age} />
        </div>
      )}

    </div>
  );
}


// resumidooooo
// export function Welcome({name = "User", age}) {
//   return(
//       <div>
//           <strong>Welcome, {name}!</strong> 

//           {age === 18 && <Age age={age}/>}

//           {age && <Age age={age}/>}

//           {(age >= 18 && age<=65) && <Age age={age}/>}

//           {((age >= 18 && age<=65) && name === "John") && <Age age={age}/>}
//       </div>   
//   )
// }


