import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const BingoGame = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCards = searchParams.get('selectedCards');

  const [selectedCardIndices, setSelectedCardIndices] = useState([]);
  const [markedNumbers, setMarkedNumbers] = useState([]);

  useEffect(() => {
    if (selectedCards) {
      const indices = selectedCards.split(',').map(index => parseInt(index));
      setSelectedCardIndices(indices);
    } else {
      console.error('No selected cards found in URL parameters');
    }
  }, [selectedCards]);

  const handleNumberClick = (number) => {
    setMarkedNumbers(prevMarkedNumbers => {
      if (prevMarkedNumbers.includes(number)) {
        return prevMarkedNumbers.filter(n => n !== number);
      } else {
        return [...prevMarkedNumbers, number];
      }
    });
  };

  return (
    <div className="bingo-game-container">
      <h1>Bingo Game</h1>
      <table>
        <tbody>
          {selectedCardIndices.map((index, cardIndex) => (
            <tr key={cardIndex}>
              {Array.from({ length: 5 }).map((_, rowIndex) => {
                const number = index * 5 + rowIndex + 1;
                const isMarked = markedNumbers.includes(number);
                const cellClassName = isMarked ? 'bingo-number marked' : 'bingo-number';

                return (
                  <td
                    key={rowIndex}
                    className={cellClassName}
                    onClick={() => handleNumberClick(number)}
                  >
                    {number}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoGame;