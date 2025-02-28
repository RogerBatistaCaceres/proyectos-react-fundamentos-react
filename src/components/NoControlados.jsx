import { useRef, useState } from "react";

const NoControlado = () => {
  // Los formularios NoControlados, los datos se controlan cuando pulsamos el
  // botón [submit], y entonces es ahí donde hacemos las validaciones

  // En los formularios Controlados, los datos se controlan directamente
  // desde las entradas de los datos, caracter a caracter. Es decir el usuario tiene
  // interactividad con los elementos de edición, de esta forma
  // podemos decirle en tiempo real si necesita más de x caracteres o si está
  // introduciendo algún caracter no permitido, en tiempo real en la edición.
  // Los formularios controlados son los formularios preferidos en la actualidad

  // La forma de hacer esto antes era, acceder directamente al document
  // y preguntar por el id del formulario
  // <form onSubmit={handleSubmit} id="form">
  // const form = document.querySelector('#form')

  // La forma de hacerlo en react es con useRef
  // cada vez que se quiera hacer una referencia al dom tenemos que utilizar
  // el useRef.
  // cada vez que se quiera capturar de forma manual un elemento del DOM
  // tenemos que utilizar el useRef.
  const form = useRef(null);

  const [error, setError] = useState(""); /// le pasamos string vacio que significa que no hay error "",
  // cada vez que hay un error se lo pasamos a las funciones de validación de errores..

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpio el error para que si no hay error no se quede pintado en pantalla.

    ///////////////////  *** CAPTURAR LOS DATOS ****************  /////////////////////////////
    // console.log("me diste un click");
    // console.log(form.current);
    // Para acceder a los datos internos del formulario lo hacemos
    // usando el FormData de JavaScript
    // console.log(new FormData(form.current));
    const data = new FormData(form.current);
    // los tres puntitos anteriores (spread operator) lo que hace es que todo lo que
    // este en entries va a tratar de pasarlo a un iterable (arreglo)
    // Importante para procesar los formularios con FormData es necesario
    // que los elementos tengan el atributo "name"

    // console.log([...data.entries()]);

    // Lo más cómodo es transformar el data a un objeto para lo cual debemos hacer

    //const dataObject = Object.fromEntries([...data.entries()]);

    // esta linea anterior convierte una lista de pares [clave,valor] en un objeto,
    // todo estos son conceptos de JavaScript, no tienen que ver con react

    //console.log(dataObject);

    // ahora como son objetos podemos hacer la desestructuración para obtener lo datos

    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    ///////////////////  *** VALIDAR LOS DATOS ****************  /////////////////////////////
    // El método trim lo que hace es eliminar los espacios en blanco
    // if (title.trim() === "") return console.log("Llena este campo");
    // Esta es otra forma para hacer lo mismo de forma más reducida
    // if (!title.trim()) return console.log("Llena este campo");

    if (!title.trim() || !description.trim() || !state.trim())
      return setError("LLena todos los campos");

    ///////////////////  *** ENVIAR LOS DATOS ****************  /////////////////////////////

    console.log(title, description, state);
  };

  // Esta es la vieja forma de poner un evento en javascript
  // con esto se evita que el navegador haga el comportamiento por
  // defecto de enviar los datos en la url.
  // document.addEventListener('submit',(evento)=>{
  // evento.preventDefault()
  // })

  return (
    <form onSubmit={handleSubmit} ref={form}>
      {/* esto es lo que realmente hace react, pero para no escribir tanto código
      se puede resumir en la línea anterior, react autómaticamente le va a pasar
      a esa función el evento
      onSubmit={(e) => { handleSubmit(e) }} >*/}
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="todo #01"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        defaultValue="descripción #01"
      />
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="Completado"
      >
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {
        /* Con el operador ternarios "if then else"
         error !== "" ? error : "No hay errores" 
      pero si quiero que no me salga el "No hay errores" si no los hay la otra forma es la siguiente
      debo usar el otro operador "if then"
      */
        error !== "" && error
      }
    </form>
  );
};

export default NoControlado;
