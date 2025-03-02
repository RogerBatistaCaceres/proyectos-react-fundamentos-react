const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;
  // https://getbootstrap.com/docs/5.3/components/list-group/#basic-example
  // className = "list-group-item"> es para que me lo muestre como una lista
  return (
    <li className="list-group-item">
      {/* Con esta clase hacemos que el elemento prioritario (badge) se ponga en la derecha y arriba*/}
      <div className="d-flex justify-content-between align-items-start">
        <div>
          {/* Con esta clase hacemos que el texto se muestre tachado*/}
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p className={`${state && "text-decoration-line-through"}`}>
            {description}
          </p>
          {/* para separar los botones usamos flexbox (from Flexible box) con el gap, 
          el gap solo se puede usar con flex o con grid */}
          <div className="d-flex gap-2">
            <button
              // Tenemos que pasarlo por una función de flecha, porque si lo dejamos sin pasarlo
              // por una función se renderea (refresca) desde el principio y jsx lo va a activar de inmediato.
              // Y nosotros queremos que se ejecute cuando hagamos un click.
              // Si lo dejemos sin la función flecha se ejecutará desde el principio, y por lo tanto cada vez
              // que se renderea(refresh) va a eliminar todos los todos desde el principio, y no cuando queremos
              // que es cuando se le da click al botón.
              onClick={() => deleteTodo(id)}
              className="btn btn-sm btn-danger"
            >
              Eliminar
            </button>
            <button
              // Tenemos que pasarlo por una función de flecha, porque si lo dejamos sin pasarlo
              // por una función se renderea (refresca) desde el principio y jsx lo va a activar de inmediato.
              // Y nosotros queremos que se ejecute cuando hagamos un click.
              // Si lo dejemos sin la función flecha se ejecutará desde el principio, y por lo tanto cada vez
              // que se renderea(refresh) va a eliminar todos los todos desde el principio, y no cuando queremos
              // que es cuando se le da click al botón.
              onClick={() => updateTodo(id)}
              className="btn btn-sm btn-warning"
            >
              Actualizar
            </button>
          </div>
        </div>
        <span className="badge text-bg-primary">
          {priority && "Prioritario"}
        </span>
      </div>
    </li>
  );
};

export default Todo;
