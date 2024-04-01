// App.jsx
import React, { useState } from 'react';
import { useNavigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BingoCard from './components/BingoCard';
import BingoGamePage from './components/BingoGamePage';
import './App.css';

const bingoCards = [
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ],



  // Other predefined cards...
];

const App = () => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (index) => {
    setSelectedCards(prevSelectedCards => {
      if (prevSelectedCards.includes(index)) {
        return prevSelectedCards.filter(cardIndex => cardIndex !== index);
      } else {
        return [...prevSelectedCards, index];
      }
    });
  };

  const handleDone = () => {
    if (selectedCards.length === 0) {
      alert("Please select at least one bingo card.");
    } else if (selectedCards.length > 4) {
      alert("You can only select up to 4 cards.");
    } else {
      navigate(`/game?selectedCards=${selectedCards.join(',')}`);
    }
  };

  return (
    <div className="app-container">
      <h1>Select up to 4 Bingo Cards:</h1>
      <div className="bingo-card-selection">
        {bingoCards.map((card, index) => (
          <div key={index} className={`bingo-card ${selectedCards.includes(index) ? 'selected' : ''}`} onClick={() => handleCardSelect(index)}>
            <p>Card Number {index + 1} </p><BingoCard numbers={card} />
          </div>
        ))}
      </div>
      {selectedCards.length > 0 && (
        <button className="done-button" onClick={handleDone}>Done</button>
      )}
    </div>
  );
};

export default App;