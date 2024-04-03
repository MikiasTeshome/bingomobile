import React from 'react';

const BingoCard = ({ numbers }) => {
  if (!Array.isArray(numbers)) {
    return <div>Error: Invalid numbers data</div>;
  }
 const colors = [" rgb(255, 0, 0)", "rgba(255, 165, 0, 0.752)", " rgb(0, 0, 255)", "rgb(26, 255, 0)","rgb(255, 0, 200)"]; // Example colors array

  return (
   <div className="bingo-card">
      <table>
        <tbody>
          {numbers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Array.isArray(row) ? (
                row.map((number, columnIndex) => (
                  <td
                    key={columnIndex}
                    style={{
                      color: rowIndex === 2 && columnIndex === Math.floor(row.length / 2) ? "black" : colors[columnIndex % colors.length],
                      fontWeight: "bold" // Make the numbers bold
                    }}
                  >
                    {number}
                  </td>
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
