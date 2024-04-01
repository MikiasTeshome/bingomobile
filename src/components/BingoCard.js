// BingoCard.js
import React from 'react';

const BingoCard = ({ numbers }) => {
  return (
    <div className="bingo-card">
      <table>
        <tbody>
          {numbers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number, columnIndex) => (
                <td key={columnIndex}>{number}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoCard;
