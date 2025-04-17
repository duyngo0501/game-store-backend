# Game Store Project

A full-stack application with a Flask backend and React frontend.

## Project Structure

- `game-store-backend/`: Flask backend
- `frontend/`: React frontend with Vite and Tailwind CSS

## Setup and Running

### Backend (Flask)

1. Navigate to the backend directory:
   ```
   cd game-store-backend
   ```

2. Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```
   flask run
   ```

The backend will be available at http://localhost:5000.

### Frontend (React)

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

The frontend will be available at http://localhost:5173.

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/games`: Get all games
- `GET /api/games/<id>`: Get a specific game
- `POST /api/games`: Create a new game (admin only)
- `PUT /api/games/<id>`: Update a game (admin only)
- `DELETE /api/games/<id>`: Delete a game (admin only)
- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login a user
- `GET /auth/me`: Get current user information

## Development

- The backend uses Flask with SQLAlchemy for database operations
- The frontend uses React with Vite and Tailwind CSS for styling
- CORS is enabled to allow frontend-backend communication
- A proxy is configured in the frontend to avoid CORS issues 