import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTodo(title.trim());

    setTitle("");

    navigate("/");
  };

  return (
    <main className="container">
      <div className="form-card">
        <h1>Add New Todo</h1>

        <p className="subtitle">
          Create a new task for your todo list.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">
            Task
          </label>

          <input
            id="todo"
            type="text"
            placeholder="Enter your task..."
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            autoFocus
          />

          <button
            type="submit"
            className="add-btn"
          >
            Add Todo
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddTodo;