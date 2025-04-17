import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`http://localhost:5000/games/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game');
        }
        const data = await response.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          game_id: id,
          quantity: quantity
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      // Show success message
      alert('Game added to cart successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        {error}
      </div>
    );
  }

  if (!game) {
    return (
      <div className="alert alert-warning m-4" role="alert">
        Game not found
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={game.image_url}
            alt={game.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{game.title}</h1>
          <p className="text-muted mb-4">{game.description}</p>
          <div className="mb-4">
            <h4 className="text-primary">${game.price.toFixed(2)}</h4>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              className="form-control w-25"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetail; 