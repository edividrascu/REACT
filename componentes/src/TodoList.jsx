// crear una lista de cosas que hacer al darle al boton se añaden nuevas LI a la UL
import { useState } from 'react';

function TodoList() {
    // hacemos  constantes para guardar los elementos
  const [tarea, setTarea] = useState(''); // Estado para almacenar la tarea ingresada
  const [tareas, setTareas] = useState([]); // Estado para almacenar la lista de tareas

  const handleChange = (event) => {
    // Manejar cambios en el input y actualizar el estado de las TODOOO
    setTarea(event.target.value);
  };

  const agregarTarea = () => {
    // Agregar la tarea actual al estado de la lista de tareas
    setTareas([...tareas, tarea]);
    // Limpiar el input después de agregar la tarea PARA PODER ESCRIBIR OTRA
    setTarea([]);
  };
//   hacemos una funcion para eliminar los todos
  const handleResetTodo = () => {
    setTareas([]); // Limpiar todas las tareas estableciendo el array en vacío
  };
  return (
    <div>
      <label>
        Cosas que hacer
        <input
          className="input"
          type="text"
          value={tarea}
          onChange={handleChange}
        />
      </label>
      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        <h3>Tareas pendientes</h3>
        {tareas.map((tarea, index) => (
            // añadimos un checkbox por si acabamos la tarea
          <li key={index}>{tarea} <input type="checkbox" /></li>
        ))}
      </ul>
      <button onClick={handleResetTodo} >ELIMINAR TODO</button>
    </div>
  );
}

export default TodoList;
