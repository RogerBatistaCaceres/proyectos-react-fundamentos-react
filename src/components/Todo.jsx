const Todo = ({ todo }) => {
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
            <button className="btn btn-sm btn-danger">Eliminar</button>
            <button className="btn btn-sm btn-warning">Actualizar</button>
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
