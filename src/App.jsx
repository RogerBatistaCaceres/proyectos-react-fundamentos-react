import { useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

// Esta constante debe estar fuera del componente para que no se esté creando
// constantemente cada vez que se renderiza nuestro componente. Va a ser un array[] de objetos {}..
const initialStateTodos = [
  {
    id: 1,
    title: "Todo #01",
    description: "Descripción #01",
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: "Todo #02",
    description: "Descripción #02",
    state: false,
    priority: false,
  },

  {
    id: 3,
    title: "Todo #03",
    description: "Descripción #03",
    state: false,
    priority: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  // Hacemos una función  y le pasamos un "todo", y la función hace una copia del los "todos" que están
  // general en la aplicación y le agregamos el nuevo todo que le hemos pasado en la función
  const addTodo = (todo) => {
    //setTodos((prev) => [...prev, todo]);
    // esto hace lo mismo pero con una función ...
    setTodos([...todos, todo]);
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      {/* Ahora enviamos estos "todos" como props (propiedades) hacia el componente, de la siguiente forma  */}
      <Todos todos={todos} />
    </div>
  );
};

export default App;

// Esto es del curso previo a los formularios controlados ..

//export default App;

// import Formulario from "./components/Formulario";
// import Cat from "./components/Cat";
// import NoControlado from "./components/NoControlados";

// Hemos adicionado el CDN de bootstrap en el indexedDB.html en la parte del head
// lo hemos cogido desde la web de bootstrap https://getbootstrap.com/
// Content Delivery Network (Red de distribución de Contenidos)

// const App = () => {
//   return (
//    <div className="container">
//      <h1>Formularios</h1>
//      {/* Ejemplo de formularios No controlados
//      <NoControlado />
//      */}
//      {/* Ejemplo de formularios Controlados
//      <Controlado />
//      // Ejemplo con el Spread operator ... para hacer copia de un objeto
//      <Cat />
//      */}
//      <Formulario />
//    </div>
//);
//};

//export default App;
