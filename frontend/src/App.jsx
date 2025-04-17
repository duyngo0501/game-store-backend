import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import ImportGame from './components/ImportGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/import-game" element={<ImportGame />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
