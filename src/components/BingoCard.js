import React from 'react';

const BingoCard = ({ numbers }) => {
  if (!Array.isArray(numbers)) {
    return <div>Error: Invalid numbers data</div>;
  }

  return (
    <div className="bingo-card">
      <table>
        <tbody>
          {numbers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Array.isArray(row) ? (
                row.map((number, columnIndex) => (
                  <td key={columnIndex}>{number}</td>
                ))
              ) : (
                <td>Error: Invalid row data</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoCard;
