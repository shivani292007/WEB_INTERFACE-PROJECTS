import React from "react";
import { Link } from "react-router-dom";

import "./report.css";

function Report() {

  const subjects = [
    {
      code: "CS401",
      subject: "Data Structures",
      internal: 28,
      external: 62,
      total: 90,
      grade: "S",
      point: 10
    },
    {
      code: "CS402",
      subject: "Database Management",
      internal: 26,
      external: 58,
      total: 84,
      grade: "A+",
      point: 9
    },
    {
      code: "CS403",
      subject: "Operating Systems",
      internal: 25,
      external: 57,
      total: 82,
      grade: "A+",
      point: 9
    },
    {
      code: "CS404",
      subject: "Computer Networks",
      internal: 24,
      external: 54,
      total: 78,
      grade: "A",
      point: 8
    },
    {
      code: "CS405",
      subject: "Web Technology",
      internal: 29,
      external: 63,
      total: 92,
      grade: "S",
      point: 10
    }
  ];

  return (
    <div className="report-page">

      <div className="report-card">

        <div className="college-header">

          <div className="college-logo">
            🎓
          </div>

          <div>
            <h1>
              ENGINEERING COLLEGE
            </h1>

            <p>
              Student Academic Report Card
            </p>

            <small>
              Affiliated to University | Approved by AICTE
            </small>
          </div>

        </div>

        <div className="student-info">

          <div>
            <span>Student Name</span>
            <strong>Shivani M</strong>
          </div>

          <div>
            <span>Register Number</span>
            <strong>411625149043</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>Computer Science</strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>IV Semester</strong>
          </div>

          <div>
            <span>Academic Year</span>
            <strong>2026 - 2027</strong>
          </div>

          <div>
            <span>Section</span>
            <strong>A</strong>
          </div>

        </div>

        <div className="table-title">
          <h2>Academic Performance</h2>
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>S.No</th>
                <th>Code</th>
                <th>Subject</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Point</th>
              </tr>
            </thead>

            <tbody>

              {subjects.map((subject, index) => (
                <tr key={subject.code}>

                  <td>{index + 1}</td>

                  <td>
                    {subject.code}
                  </td>

                  <td className="subject-name">
                    {subject.subject}
                  </td>

                  <td>
                    {subject.internal}
                  </td>

                  <td>
                    {subject.external}
                  </td>

                  <td>
                    <strong>
                      {subject.total}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={
                        subject.grade === "S"
                          ? "grade grade-s"
                          : "grade"
                      }
                    >
                      {subject.grade}
                    </span>
                  </td>

                  <td>
                    {subject.point}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="summary">

          <div className="summary-card">
            <span>Total Marks</span>
            <strong>426 / 500</strong>
          </div>

          <div className="summary-card">
            <span>Percentage</span>
            <strong>85.2%</strong>
          </div>

          <div className="summary-card">
            <span>CGPA</span>
            <strong>9.20</strong>
          </div>

          <div className="summary-card">
            <span>Attendance</span>
            <strong>94%</strong>
          </div>

        </div>

        <div className="result-section">

          <div className="result-status">
            <span>Overall Result</span>
            <strong>PASS</strong>
          </div>

          <div className="result-details">

            <p>
              <b>Class:</b> First Class with Distinction
            </p>

            <p>
              <b>Credits Earned:</b> 25
            </p>

          </div>

        </div>

        <div className="grade-info">

          <h3>Grade Information</h3>

          <div className="grade-list">

            <span>S = 10</span>
            <span>A+ = 9</span>
            <span>A = 8</span>
            <span>B+ = 7</span>
            <span>B = 6</span>
            <span>C = 5</span>

          </div>

        </div>

        <div className="actions">

          <button
            onClick={() => window.print()}
            className="print-btn"
          >
            🖨 Print Report
          </button>

          <Link
            to="/student"
            className="back-btn"
          >
            ← Student Details
          </Link>

        </div>

        <div className="signature">

          <div>
            <span>Class Advisor</span>
            <p>Signature</p>
          </div>

          <div>
            <span>HOD</span>
            <p>Signature</p>
          </div>

          <div>
            <span>Principal</span>
            <p>Signature</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Report;