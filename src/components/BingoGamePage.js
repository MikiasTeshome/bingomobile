import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BingoGamePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCards = searchParams.get('selectedCards');

  const [selectedCardIndices, setSelectedCardIndices] = useState([]);

  useEffect(() => {
    if (selectedCards) {
      const indices = selectedCards.split(',').map(index => parseInt(index));
      setSelectedCardIndices(indices);
    } else {
      console.error('No selected cards found in URL parameters');
    }
  }, [selectedCards]);

  return (
    <div className="bingo-game-container">
      <h1>Bingo Game</h1>
      <table>
        <tbody>
          {selectedCardIndices.map((index, cardIndex) => (
            <tr key={cardIndex}>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <td key={rowIndex} className="bingo-number">{index * 5 + rowIndex + 1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoGamePage;
