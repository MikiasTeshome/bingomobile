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
  const [isBingo, setIsBingo] = useState(false);
  const [winningCardIndex, setWinningCardIndex] = useState(null); // Initialize as null

  const winningPositions = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7,  17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 18, 24],
    [20, 16,  8, 4]
  ];

  useEffect(() => {
    setBingoCards(bingoCardsProp.map(card => [...card]));
  }, [selectedCards, bingoCardsProp]);

  useEffect(() => {
    selectedCards.forEach(cardIndex => {
      const cells = document.querySelectorAll(`.bingo-card-${cardIndex} .main-table-cell`);
      cells.forEach(cell => {
        cell.addEventListener("click", () => handleCellClick(cardIndex, cell));
      });
      return () => {
        cells.forEach(cell => {
          cell.removeEventListener("click", () => handleCellClick(cardIndex, cell));
        });
      };
    });
  }, [selectedCards, bingoCardsProp]);

  const matchWin = (cardIndex) => {
    const cells = document.querySelectorAll(`.bingo-card-${cardIndex} .main-table-cell`);
    return winningPositions.some(combination => {
      let ite = 0;
      combination.forEach(index => {
        if (cells[index].classList.contains("strickout")) ite++;
      });
      if (ite === 5) {
        let indexWin = winningPositions.indexOf(combination);
        winningPositions.splice(indexWin, 1);
      }
      if (combination.every(index => cells[index].classList.contains("strickout"))) {
        return true;
      }
      return false;
    });
  };

  const handleCellClick = (cardIndex, cell) => {
    cell.classList.add("strickout");
    if (matchWin(cardIndex)) {
      setIsBingo(true);
      setWinningCardIndex(cardIndex); // Update winningCardIndex
    }
  };

  return (
    <div className="wrapper">
      {selectedCards.map((cardIndex) => (
        <div key={cardIndex} className={`container bingo-card-${cardIndex}`}>
        <div className="bingo-card">
  <p style={{ textAlign: "center", fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', letterSpacing: '0.5em' }}>
    <span style={{ color: 'black' }}>B</span>
    <span style={{ color: 'black' }}>I</span>
    <span style={{ color: 'black' }}>N</span>
    <span style={{ color: 'black' }}>G</span>
    <span style={{ color: 'black' }}>O</span>
  </p>


            
            <table className="tblBingo">
              <tbody>
                {bingoCardsProp[cardIndex].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((number, colIndex) => (
                      <td key={colIndex} className="main-table-cell">
                        <div className="cell-format">
                          {number}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bingo-container">
  {isBingo && cardIndex === winningCardIndex && (
    <p style={{ textAlign: "center", fontSize: "36px" }}>
      <span style={{ color: "red" }}>B</span>
      <span style={{ color: "orange" }}>I</span>
      <span style={{ color: "blue" }}>N</span>
      <span style={{ color: "orange" }}>G</span>
      <span style={{ color: "purple" }}>O</span>
    </p>
  )}
</div>

          </div>
        </div>
      ))}
    </div>
  );
  
};

export default BingoGamePage;
