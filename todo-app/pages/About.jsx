function About() {
  return (
    <main className="container">
      <div className="about-card">
        <h1>About Todo App</h1>

        <p>
          This is a simple Todo Application built using
          React and React Router.
        </p>

        <div className="features">
          <div>
            <h3>➕ Add Tasks</h3>
            <p>Create new tasks easily.</p>
          </div>

          <div>
            <h3>✅ Complete Tasks</h3>
            <p>Mark tasks as completed.</p>
          </div>

          <div>
            <h3>🗑️ Delete Tasks</h3>
            <p>Remove tasks you no longer need.</p>
          </div>

          <div>
            <h3>💾 Save Tasks</h3>
            <p>
              Tasks are saved using browser localStorage.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;