import "./App.css";
import { Card } from "./components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [players, setPlayers] = useState();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/PlayerStats");
    setPlayers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {/* Navbar */}
      <nav>
        <div className="logo-container">
          <img className="logo" src="../public/logo.webp" alt="Company logo" />
        </div>

        <div className="title-container">
          <h2 className="title">esynergy Pool Leaderboard</h2>
        </div>
      </nav>
      {/* The actual content */}
      <section>
        {players?.map((player) => (
          <Card player={player} key={player.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
