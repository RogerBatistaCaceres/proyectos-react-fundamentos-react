import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

// Esta constante debe estar fuera del componente para que no se esté creando
// constantemente cada vez que se renderiza nuestro componente. Va a ser un array[] de objetos {}..
//const initialStateTodos = [];
// Para que inicialmente se traiga del localStore el contenido almacenado en la llave "todos" tenemos
// que hacer la lectura del localStorage. Esta próxima línea lo que hace es que si existe el todo en
// el localStorage lo carga, de lo contrario, que no exista la llave,  lo carga con un array vacío.
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

/* const initialStateTodos = [
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
*/
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  // El useEffect se usa porque cada vez que un estado cambie se pueda ejecutar una acción
  // El useEffect siempre se va a ejecutar en el primer renderizado.
  // Si quiero que se ejecute una vez entonces tengo que ponerle los [] corchetes vacios
  // y si quiero que se ejecute con el cambio de una propiedad, le tengo que pasar la propiedad.

  // si ponemos los todos dentro del [todos], lo que nos dice es que este useEffect se va a ejecutar
  // cada vez que cambien los "todos", ya sea porque los adiciono, los elimino o los actualizo.

  // Cada vez que se actualizen los "todos" vamos a estar guardando los todos en el localStorage..
  useEffect(() => {
    // console.log("useEffect");
    // la linea JSON.stringify(todos), lo que hace es transformar los "todos" en un formato JSON para
    // almacenarlos en el localStorage (del explorador del ordenador local)
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Hacemos una función  y le pasamos un "todo", y la función hace una copia del los "todos" que están
  // general en la aplicación y le agregamos el nuevo todo que le hemos pasado en la función
  const addTodo = (todo) => {
    //setTodos((prev) => [...prev, todo]);
    // esto hace lo mismo pero con una función ...
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    // Hacer un filter que cuando todo.id sea diferente al id, que me devuelva todos los elementos
    // que no pertenezcan a ese id. De esa forma en el nuevo arreglo solo quedan los elementos que no tengan
    // el id.
    const newArrray = todos.filter((todo) => todo.id !== id);
    setTodos(newArrray);
  };

  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    });
    setTodos(newArray);
  };

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      // if (a.priority === true) return -1;
      if (a.priority) return -1;
      // if (a.priority === false) return 1;
      if (!a.priority) return 1;
    });
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      {/* Primero organizo los componentes "<Todos />" por prioriotarios, y después los muestro (pinto)  */}
      {/* Ahora enviamos estos "todos" como props (propiedades) hacia el componente, de la siguiente forma  */}
      {/* con la idea de que el componente "<Todos />", los pinte  */}
      <Todos
        todos={orderTodo(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
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
