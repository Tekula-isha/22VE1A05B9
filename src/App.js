import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StaticURLsPage from './pages/StaticURLsPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: 'blue' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Shorten URL</Link>
        <Link to="/urls">View Shortened URLs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/urls" element={<StaticURLsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
