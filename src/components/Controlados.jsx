import { useState } from "react";

const Controlado = () => {
  // Los formularios Controlados, los datos se controlan directamente
  // desde las entradas de los datos, caracter a caracter. Es decir el usuario tiene
  // interactividad con los elementos de edición, de esta forma
  // podemos decirle en tiempo real si necesita más de x caracteres o si está
  // introduciendo algún caracter no permitido, en tiempo real en la edición.
  // Los formularios controlados son los formularios preferidos en la actualidad

  // En los formularios NoControlados, los datos se controlan cuando pulsamos el
  // botón [submit], y entonces es ahí donde hacemos las validaciones

  // Esta es la forma de hacerlo uno a uno, hay otra forma de poder entrar todos
  // los datos de una vez
  /*
   const [title, setTitle] = useState("Todo #01");
   const [description, setDescription] = useState("Description #01");
   const [state, setState] = useState("Pendiente");
   */

  // Hacer el useState con objetos
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "Pendiente",
    priority: true,
  }); // importante, ahora es useState como es un objeto se inicializa, como objeto {}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo.title, todo.description, todo.priority, todo.state);
  };

  // este evento de ejecuta cuando escribimos en cada elemento ...
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // Es importante saber que los objetos se pueden acceder a través de los corchetes"",
    // en lugar de utilizar la notación de punto:
    // es lo mismo "todo.title" que todo["title"], esa es la técnica de los corchetes para acceder
    // a las propiedades de un objeto en javascript.
    // setTodo({
    //     ...todo,
    //     e.target.name: e.target.value
    // })

    // setTodo({ ...todo, priority: e.target.checked })

    setTodo({
      ...todo,
      // esta linea es para los tipos: text, textarea y select, pero para los tipos checkbox
      // el valor no se recoge en "e.target.value" sino que se recoge en "e.target.checked", por
      // lo cual hay que utilizar el operador ternario..
      // [e.target.name]: e.target.value,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      con esta línea le decimos que, puedes hacer una copia de todo lo que ya tenga el "todo"
      con la expresión "...todo" (spread operator) y además en la propiedad title se va a colocar lo que 
      viene en "e.target.value".
      Con esta copia nos aseguramos de que siga manteniendose lo que hay en el estado actual.

       */}
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        // podemos optimizar mucho más el código usando una función que manipule todos los onChange
        // creamos una función handleChange ... y es importante el name que es el que nos dice
        // dentro de la función onChange desde donde viene el datos...
        // onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={todo.description}
        // onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="priority"
          // este "id" es para relacionar este input con el label mediante la propiedad htmlFor
          id="inputCheck"
          // para el checkbox no se usa el campo value, sino el campo checked
          checked={todo.priority}
          //onChange={(e) => setTodo({ ...todo, priority: e.target.checked })}
          // ahora vamos a reutilizar la linea anterior utilizando el handleChange
          // como en el código de todos los otros elementos.
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        // onChange={(e) => setTodo({ ...todo, state: e.target.value })}
        onChange={handleChange}
      >
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
