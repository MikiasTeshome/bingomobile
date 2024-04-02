import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BingoCard from './components/BingoCard';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);
  const [selectedCardName, setSelectedCardName] = useState(null); // Add selectedCardName state

  const bingoCards = [
    [
      [11, 35, 41, 63, 68],
      [2, 28, 30, 1, 69],
      [15, 12, "Free", 73, 46],
      [6, 17, 61, 59, 38],
      [8, 22, 57, 15, 50]
    ]
,    
[
  [9, 46, 30, 55, 29],
  [8, 66, 53, 51, 26],
  [12, 55, "Free", 66, 22],
  [10, 15, 64, 43, 61],
  [6, 14, 33, 42, 57]
]

,
[
  [12, 72, 34, 62, 3],
  [5, 30, 31, 38, 16],
  [3, 61, "Free", 30, 71],
  [14, 66, 39, 36, 42],
  [8, 21, 47, 49, 26]
]
,
[
  [6, 39, 23, 22, 33],
  [1, 24, 44, 47, 63],
  [10, 56, "Free", 13, 39],
  [13, 61, 29, 15, 53],
  [4, 3, 36, 15, 24]
]
,
[
  [11, 66, 3, 47, 18],
  [12, 45, 26, 24, 54],
  [3, 61, "Free", 53, 36],
  [13, 9, 15, 65, 9],
  [9, 67, 19, 63, 57]
]
,
[
  [7, 32, 11, 74, 49],
  [14, 33, 20, 56, 52],
  [13, 56, "Free", 57, 57],
  [11, 63, 63, 29, 62],
  [12, 56, 29, 51, 38]
]
,
[
  [1, 28, 67, 14, 46],
  [11, 51, 10, 49, 35],
  [15, 71, "Free", 50, 57],
  [2, 36, 13, 54, 9],
  [13, 59, 25, 38, 52]
]
,
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, "Free", 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ],
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, "Free", 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ],
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, "Free", 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ],
    // Your bingo card arrays here...
  ];

  const handleCardSelect = (index) => {
    setSelectedCardNumber(index + 1); // Increment index by 1
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
      navigate('/game', { state: { bingoCards, selectedCards, selectedCardNumber } });
    }
  };

  return (
    <div className="app-container">
<h1 className="bingo-title">Select up to 4 <span>B</span><span>I</span><span>N</span><span>G</span><span>O</span> Cards And Click Start to play:</h1>
      <div className="bingo-card-selection">
        {bingoCards.map((card, index) => (
          <div key={index} className={`bingo-card ${selectedCards.includes(index) ? 'selected' : ''}`} onClick={() => handleCardSelect(index)}>
            <p>Cartela Number {index + 1}</p><BingoCard numbers={card} />
          </div>
        ))}
     </div>
  {selectedCards.length > 0 && (
    <button className="start-button" onClick={handleDone}>
      <span>S</span><span>T</span><span>A</span><span>R</span><span>T</span> 
    </button>
  )}
</div>

  );
};

export default App;