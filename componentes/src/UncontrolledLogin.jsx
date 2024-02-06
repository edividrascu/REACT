// Ventajas de usar la API FormData:

// Simplicidad: Simplifica el proceso de recopilación de datos del formulario. Puedes crear un objeto FormData directamente desde el elemento del formulario, facilitando el trabajo con los datos del formulario.

// Dinámico: Se adapta dinámicamente a cambios en la estructura del formulario. Si agregas o eliminas campos del formulario, no necesitas modificar tu código JavaScript siempre que los atributos name del formulario sean coherentes.

// Maneja Cargas de Archivos: FormData puede manejar fácilmente las cargas de archivos, lo cual puede ser complicado con algunos otros métodos.

// Desventajas:

// Soporte Limitado en Navegadores Antiguos: Aunque FormData es ampliamente compatible, navegadores más antiguos pueden tener soporte limitado o nulo. Asegúrate de la compatibilidad si necesitas admitir navegadores más antiguos.

// Sin Validación Incorporada: FormData no realiza ninguna validación en los datos. Necesitarás implementar tu lógica de validación si es necesario.

// No es Ideal para Estructuras Complejas: Para estructuras de datos más complejas o cuando necesitas manipular los datos antes de enviarlos, FormData puede no ser la mejor opción. En tales casos, una solución de gestión de estado o una biblioteca como Redux podrían ser más adecuadas.

export  function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const session = formData.get('session');

    const data={
      username,
      password,
      session
    }
    console.log(data)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My descontrolado fdormulario</h1>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button >Login</button>
      <button type="reset">reset</button>
    </form>
  )
}
