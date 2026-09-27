import TodoItem from "../components/TodoItem";

function Home({ todos, toggleTodo, deleteTodo }) {
  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <main className="container">
      <div className="home-header">
        <div>
          <h1>My Todos</h1>
          <p className="subtitle">
            Manage your daily tasks easily.
          </p>
        </div>

        <div className="todo-count">
          {completedCount} / {todos.length} completed
        </div>
      </div>

      {todos.length === 0 ? (
        <div className="empty-state">
          <h2>No Todos Yet</h2>
          <p>You don't have any tasks. Add your first task!</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;