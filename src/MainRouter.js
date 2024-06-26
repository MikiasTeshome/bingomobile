import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import BingoGamePage from './components/BingoGamePage';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<BingoGamePage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
