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
      [4, 19, 44, 59, 71],
      [8, 23, 33, 46, 64],
      [15, 28, "Free", 49, 66],
      [9, 25, 43, 51, 69],
      [11, 26, 35, 57, 61]
    ]
,    
[
  [3, 20, 38, 57, 64],
  [12, 18, 42, 46, 65],
  [13, 23, "Free", 53, 63],
  [6, 27, 41, 52, 68],
  [14, 30, 45, 54, 70]
]
,
[
  [9, 17, 36, 55, 63],
  [2, 22, 43, 57, 67],
  [10, 21, "Free", 48, 61],
  [13, 24, 39, 56, 73],
  [5, 26, 40, 50, 69]
]
,
[
  [12, 17, 41, 57, 75],
  [1, 28, 32, 54, 61],
  [7, 27, "Free", 48, 63],
  [10, 23, 39, 59, 71],
  [15, 21, 35, 46, 67]
]
,
[
  [2, 18, 32, 46, 73],
  [5, 29, 43, 58, 63],
  [11, 22, "Free", 49, 66],
  [7, 27, 41, 55, 69],
  [14, 23, 37, 51, 70]
]
,
[
  [8, 19, 42, 55, 72],
  [13, 20, 34, 47, 60],
  [6, 21, "Free", 54, 67],
  [9, 26, 39, 58, 75],
  [11, 28, 38, 48, 61]
]
,
[
  [5, 29, 45, 56, 70],
  [9, 18, 33, 49, 67],
  [14, 27, "Free", 46, 62],
  [10, 24, 40, 57, 74],
  [12, 22, 35, 51, 66]
]
,
[
  [6, 21, 37, 53, 62],
  [14, 23, 44, 55, 73],
  [11, 28, "Free", 49, 65],
  [9, 26, 41, 58, 69],
  [2, 20, 30, 47, 64]
],
[
  [3, 19, 34, 55, 75],
  [7, 29, 43, 46, 60],
  [10, 21, "Free", 51, 66],
  [4, 27, 39, 57, 68],
  [13, 23, 35, 48, 61]
],
[
  [1, 23, 31, 46, 65],
  [4, 20, 42, 59, 70],
  [14, 27, "Free", 48, 60],
  [9, 28, 34, 55, 69],
  [11, 26, 36, 54, 75]
],
[
  [8, 20, 44, 57, 64],
  [3, 25, 32, 47, 63],
  [10, 19, "Free", 49, 66],
  [6, 27, 43, 51, 62],
  [12, 23, 38, 54, 71]
],[
  [5, 24, 33, 55, 62],
  [11, 26, 41, 47, 73],
  [7, 19, "Free", 58, 67],
  [10, 28, 36, 56, 71],
  [14, 21, 38, 49, 66]
],
[
  [3, 25, 42, 51, 63],
  [8, 17, 31, 48, 74],
  [11, 29, "Free", 46, 69],
  [13, 27, 35, 59, 61],
  [6, 20, 39, 50, 70]
],[
  [2, 29, 32, 47, 65],
  [9, 28, 34, 58, 62],
  [12, 25, "Free", 53, 70],
  [4, 21, 38, 57, 69],
  [14, 23, 44, 56, 71]
],
[
  [6, 27, 36, 59, 65],
  [9, 24, 33, 46, 72],
  [14, 22, "Free", 48, 63],
  [10, 26, 41, 51, 70],
  [11, 20, 37, 57, 69]
],[
  [7, 18, 39, 58, 61],
  [13, 22, 31, 47, 71],
  [10, 26, "Free", 49, 66],
  [4, 29, 40, 53, 69],
  [8, 25, 35, 54, 63]
],[
  [1, 23, 30, 55, 73],
  [5, 29, 33, 49, 62],
  [14, 27, "Free", 46, 64],
  [10, 26, 41, 58, 69],
  [12, 25, 36, 54, 71]
],[
  [9, 21, 31, 49, 68],
  [2, 26, 37, 56, 61],
  [10, 24, "Free", 59, 64],
  [5, 27, 43, 58, 73],
  [14, 23, 44, 53, 66]
],[
  [6, 27, 35, 58, 75],
  [12, 22, 30, 47, 63],
  [10, 26, "Free", 51, 67],
  [4, 21, 39, 56, 71],
  [9, 23, 44, 50, 64]
],[
  [8, 21, 36, 47, 69],
  [2, 19, 43, 59, 73],
  [10, 27, "Free", 46, 62],
  [5, 22, 38, 56, 75],
  [14, 30, 41, 54, 66]
],[
  [3, 26, 30, 55, 70],
  [7, 21, 42, 49, 68],
  [11, 23, "Free", 48, 61],
  [10, 28, 37, 57, 63],
  [15, 25, 33, 50, 75]
],[
  [5, 23, 34, 55, 62],
  [9, 26, 31, 48, 73],
  [11, 27, "Free", 57, 66],
  [8, 20, 39, 56, 70],
  [14, 22, 44, 50, 69]
]
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