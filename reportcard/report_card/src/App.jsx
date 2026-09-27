import React from "react";
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Report from "./report";
import "./app.css";

// HOME PAGE
function Home() {
  return (
    <div className="home-page">

      <div className="hero">

        <div className="hero-content">

          <span className="tag">
            COLLEGE MANAGEMENT SYSTEM
          </span>

          <h1>
            Student <span>Report Card</span>
          </h1>

          <p>
            View student academic details, marks, grades,
            attendance and semester performance in one place.
          </p>

          <Link
            to="/report"
            className="primary-btn"
          >
            View Report Card →
          </Link>

        </div>

      </div>

      <div className="features">

        <div className="feature-card">
          <div className="feature-icon">📋</div>

          <h3>
            Student Details
          </h3>

          <p>
            View student name, register number,
            department and semester information.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>

          <h3>
            Academic Marks
          </h3>

          <p>
            Display subject-wise marks,
            grades and credits.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>

          <h3>
            Performance
          </h3>

          <p>
            View CGPA, attendance and overall
            academic performance.
          </p>
        </div>

      </div>

    </div>
  );
}


// STUDENT PAGE
function Student() {
  return (
    <div className="student-page">

      <div className="student-container">

        <h1>
          Student Details
        </h1>

        <div className="student-grid">

          <div className="student-box">
            <span>Name</span>
            <strong>
              Shivani M
            </strong>
          </div>

          <div className="student-box">
            <span>Register Number</span>
            <strong>
              411625149043
            </strong>
          </div>

          <div className="student-box">
            <span>Department</span>
            <strong>
              Computer Science
            </strong>
          </div>

          <div className="student-box">
            <span>College</span>
            <strong>
              Engineering College
            </strong>
          </div>

          <div className="student-box">
            <span>Semester</span>
            <strong>
              IV Semester
            </strong>
          </div>

          <div className="student-box">
            <span>Academic Year</span>
            <strong>
              2026 - 2027
            </strong>
          </div>

        </div>

        <Link
          to="/report"
          className="primary-btn"
        >
          Open Report Card
        </Link>

      </div>

    </div>
  );
}


// 404 PAGE
function NotFound() {
  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>
        Page Not Found
      </h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="primary-btn"
      >
        Go Home
      </Link>

    </div>
  );
}


// MAIN APP
function App() {

  const location = useLocation();

  return (
    <div className="app">

      {/* NAVIGATION BAR */}

      <header className="navbar">

        <div className="logo">
          🎓 <span>ReportCard</span>
        </div>

        <nav>

          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "active"
                : ""
            }
          >
            Home
          </Link>

          <Link
            to="/student"
            className={
              location.pathname === "/student"
                ? "active"
                : ""
            }
          >
            Student
          </Link>

          <Link
            to="/report"
            className={
              location.pathname === "/report"
                ? "active"
                : ""
            }
          >
            Report Card
          </Link>

        </nav>

      </header>


      {/* ROUTES */}

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/student"
            element={<Student />}
          />

          <Route
            path="/report"
            element={<Report />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>


      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Student Report Card Management System
        </p>

      </footer>

    </div>
  );
}

export default App;