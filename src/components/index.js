// Import React, useEffect, and useState
import React, { useEffect, useState } from 'react';
import './style.css'; // Assuming you have style.css file
import './index.js'; // Assuming you have index.js file

const BingoGamePage = () => {
  // State to control page reload
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    const tables = document.querySelectorAll("table[id^='tblBingo']");
    const letters = document.querySelectorAll(".letters-bingo");

    const winningPositions = [
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
    ];

    tables.forEach((table, index) => {
      let arr = Array.apply(null, { length: 26 }).map(Number.call, Number);

      arr.shift();
      shuffle(arr);

      let iterator = 0;

      for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (let j = 0; j < 5; j++) {
          let td = document.createElement("td");
          td.id = arr[iterator].toString();
          td.style.height = "20%";
          td.style.width = "20%";
          td.classList.add("main-table-cell");

          let div = document.createElement("div");
          div.classList.add("cell-format");
          div.textContent = arr[iterator].toString();
          td.appendChild(div);
          tr.appendChild(td);
          iterator++;
        }
      }

      const cells = table.querySelectorAll(".main-table-cell");
      let winningIterator = 0;

      // Function to handle cell click
      const handleCellClick = (cell) => {
        cell.classList.add("strickout");

        if (matchWin(cells)) {
          letters[index * 5 + winningIterator].classList.add("show-bingo");

          winningIterator++;
          if (winningIterator === 5) {
            alert('B I N G O');
            setShouldReload(true); // Trigger page reload
          }
        }
      };

      // Add event listener to cells
      cells.forEach(cell => {
        cell.addEventListener("click", () => handleCellClick(cell)); // Pass cell to handleCellClick
      });
    });

    // Function to shuffle array
    function shuffle(arr) {
      let currentIndex = arr.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
      }

      return arr;
    }

    // Function to check winning combination
    function matchWin(cells) {
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
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // useEffect to trigger page reload
  useEffect(() => {
    if (shouldReload) {
      window.location.reload();
    }
  }, [shouldReload]);

  // Since this component handles the game logic and does not render any JSX, return null
  return null;
};

export default BingoGamePage;
