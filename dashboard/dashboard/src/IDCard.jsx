import "./IDCard.css";
import profile from "./assets/profile.jpeg";

function IDCard() {
  return (
    <div className="id-card">

      {/* Header (Inline Styling) */}
      <div
        style={{
          background: "#081a5c",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1 className="auto">PRINCE</h1>

        <h3>Dr. K. Vasudevan</h3>

        <p className="auto">College of Engineering & Technology</p>

        <p className="auto">(An Autonomous Institution)</p>
      </div>

      {/* Body */}
      <div className="card-body">

        {/* Left Side */}
        <div className="left">

          <img
            src={profile}
            className="profile-image"
            alt="profile"
          />

          <h2>SHIVANI M</h2>

        </div>

        {/* Right Side */}
        <div className="right">

          <h3>🎓 B.E - CSE</h3>

          <h4>(Cyber Security)</h4>

          <br />

          <h3>🪪 2526AUG0044</h3>

        </div>

      </div>

      
      {/* Footer (Inline Styling) */}
      <div
        style={{
          background: "#081a5c",
          color: "white",
          textAlign: "center",
          padding: "12px",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        2025 - 2029
      </div>

    </div>
  );
}

export default IDCard;