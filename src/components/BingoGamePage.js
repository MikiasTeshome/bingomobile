import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import '../index.css';
import BingoCard from './BingoCard';

const BingoGamePage = () => {
  const location = useLocation();
  const bingoCardsProp = location.state.bingoCards;
  const selectedCards = location.state.selectedCards;
  const [bingoCardsState, setBingoCards] = useState([]);

  const [winningPositions] = useState([
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [20, 16, 12, 8, 4]
  ]);

  const [lettersShown, setLettersShown] = useState(Array(25).fill(false));

  useEffect(() => {
    setBingoCards(bingoCardsProp.map(card => [...card]));
  }, [bingoCardsProp]);

  useEffect(() => {
    setLettersShown(Array(25).fill(false)); // Reset selected letters when selectedCards change
  }, [selectedCards]);

  const handleCellClick = (cardIndex, rowIndex, colIndex) => {
    setBingoCards(prevBingoCards => {
      const newBingoCards = [...prevBingoCards];
      newBingoCards[cardIndex][rowIndex][colIndex] = !newBingoCards[cardIndex][rowIndex][colIndex];
      return newBingoCards;
    });
  };

  const matchWin = (cells) => {
    return winningPositions.some(combination => {
      let ite = 0;
      combination.forEach(index => {
        if (cells[index].classList.contains("strickout")) ite++;
      });

      if (ite === 5) {
        let indexWin = winningPositions.indexOf(combination);
        winningPositions.splice(indexWin, 1);
      }

      return combination.every(index => {
        return cells[index].classList.contains("strickout");
      });
    });
  };

  return (
    <div className="wrapper">
      {selectedCards.map((cardIndex) => (
        <div key={cardIndex} className="container">
          <div className="bingo-card">
            <table className="bingo-card">
              <tbody>
                {bingoCardsProp[cardIndex].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((number, colIndex) => (
                      <td
                        key={colIndex}
                        className={`bingo-cell ${number ? 'selected' : ''}`}
                        onClick={() => handleCellClick(cardIndex, rowIndex, colIndex)}
                      >
                        {number}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="letter-div">
            <table className="letter-table">
              <tbody>
                <tr>
                  <td className="letters-bingo">{lettersShown[0] ? 'B' : ''}</td>
                  <td className="letters-bingo">{lettersShown[1] ? 'I' : ''}</td>
                  <td className="letters-bingo">{lettersShown[2] ? 'N' : ''}</td>
                  <td className="letters-bingo">{lettersShown[3] ? 'G' : ''}</td>
                  <td className="letters-bingo">{lettersShown[4] ? 'O' : ''}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default BingoGamePage;
