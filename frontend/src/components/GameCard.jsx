import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className="card h-100">
      <img
        src={game.image_url}
        className="card-img-top"
        alt={game.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text text-truncate">{game.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${game.price}</span>
          <Link to={`/games/${game.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard; 