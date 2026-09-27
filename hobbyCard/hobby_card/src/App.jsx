import "./App.css";
import HobbyCard from "./HobbyCard.css";

function App() {
  return (
    <>
      <div className="task">
        <h2>Project - 2</h2>

        <div className="container">
          <h1>Student Hobbies</h1>

          <HobbyCard
            hobbyName="Drawing"
            description="I enjoy drawing."
            image="https://images.unsplash.com/photo-1513364776144-60967b0f800f"
          />

          <HobbyCard
            hobbyName="Reading"
            description="I enjoy reading books and novels."
            image="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
          />

          <HobbyCard
            hobbyName="Photography"
            description="I love taking photos of nature and places."
            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          />

          <HobbyCard
            hobbyName="Music"
            description="I enjoy listening to and learning music."
            image="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          />
        </div>
      </div>
    </>
  );
}

export default App;