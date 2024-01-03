export const Card = ({ player }) => {
  return (
    <div className="card">
      <div className="player-pic-container">
        <img
          src="../public/review3.jpeg"
          alt="Profile Pic"
          className="profile-picture"
        />
      </div>
      <div className="details-container">
        <h4 className="name">{player.name}</h4>

        <p className="matches-played">Matches played: {player.played}</p>
        <p className="wins">Wins: {player.won}</p>
        <p className="losses">Losses: {player.lost}</p>
      </div>
    </div>
  );
};
