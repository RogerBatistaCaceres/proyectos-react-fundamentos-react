const NoControlado = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary mb-2">
        Procesar
      </button>
    </form>
  );
};

export default NoControlado;
