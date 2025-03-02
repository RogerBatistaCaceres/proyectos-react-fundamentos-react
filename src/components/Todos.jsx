import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Todos</h2>
      {/* 
      https://getbootstrap.com/docs/5.3/components/list-group/#basic-example
      className = "list-group-item"> es para que me lo muestre como una lista
      */}
      <ul className="list-group">
        {todos.map((todo) => (
          // <li key={todo.id}>{todo.title}</li>
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && (
          <li className="list-group-item text-center">Sin todos</li>
        )}
      </ul>
    </div>
  );
};

export default Todos;
