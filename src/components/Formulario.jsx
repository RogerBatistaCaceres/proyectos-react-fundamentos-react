import Swal from "sweetalert2";
import { useState } from "react";

// el formulario recibe la función addTodo mediante props (propiedades)
const Formulario = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "Pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    // trim() me elimina los espacios en blanco
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción obligatorios",
      });
    }
    // Antes de adicionar el "todo", creo el objeto que voy a enviar..., hacemos una copia del todo
    // que se está agregando usando "...todo", y modificamos la que dice state.
    addTodo({
      id: Date.now(),
      ...todo,
      // state: state === "Completado" ? true : false,
      // pero se puede simplificar de la siguiente forma porque si no es verdadero devuelve false...
      state: state === "Completado",
    });
    // console.log(title, description, priority, state);
    // Una vez que agregamos el "todo" agregamos una alerta positiva
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="priority"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={handleChange}
      >
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar Todo
      </button>
    </form>
  );
};

export default Formulario;
