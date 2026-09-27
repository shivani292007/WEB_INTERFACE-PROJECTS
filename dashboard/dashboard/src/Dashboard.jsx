import "./Dashboard.css";
import IDCard from "./IDCard";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <IDCard />

      <h2>About Me</h2>

      <p>
        Hi, I'm Shivani M, a Computer Science Engineering (Cyber Security)
        student passionate about Web Development, Cyber Security, and Data
        Science. I enjoy learning new technologies and building innovative
        projects.
      </p>

    </div>
  );
}

export default Dashboard;