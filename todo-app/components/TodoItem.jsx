function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <div
        className={`todo-title ${
          todo.completed ? "completed" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
      </div>

      <div className="todo-actions">
        <button
          className="complete-btn"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;