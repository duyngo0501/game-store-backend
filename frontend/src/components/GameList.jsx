import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/games');
        setGames(response.data.games);
        setError(null);
      } catch (err) {
        console.error('Error fetching games:', err);
        setError('Failed to load games. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading games...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Game Store</h1>
      
      {games.length === 0 ? (
        <p className="lead">No games available.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {games.map((game) => (
            <div key={game.id} className="col">
              <div className="card h-100">
                {game.image_url && (
                  <img 
                    src={game.image_url} 
                    alt={game.title} 
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{game.title}</h5>
                  <p className="card-text text-truncate">{game.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">${game.price.toFixed(2)}</span>
                    <Link 
                      to={`/games/${game.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GameList; 