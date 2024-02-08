import { useState } from 'react';

function TodoList() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  const agregarTarea = () => {
    setTareas([...tareas, tarea]);
    setTarea(''); // Limpiar el input después de agregar la tarea
  };

  const handleEliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const handleResetTodo = () => {
    setTareas([]);
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
          <li key={index}>
            {tarea}
            <input type="checkbox" />
            {/*                                 con el index el boton sabe que tarea debe eliminar*/}
            <button onClick={() => handleEliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleResetTodo}>ELIMINAR TODO</button>
    </div>
  );
}

export default TodoList;
