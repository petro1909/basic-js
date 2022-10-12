const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    let resultStr = [];
    for(let j = 0; j < matrix[i].length; j++) {
      resultStr[j] = countMinesAround(matrix, i, j);
    }
    result[i] = resultStr;
  }
  return result;
}

function countMinesAround(matrix, i, j) {
  let count = 0;
  let rowmin = i == 0 ? 0 : i - 1;
  let rowmax = i == matrix.length - 1 ? matrix.length - 1 : i + 1;
  let colmin = j == 0 ? 0 : j - 1;
  let colmax = j == matrix[i].length - 1? matrix[i].length - 1 : j + 1;

  for(let k = rowmin; k <= rowmax; k++) {
    for(let m = colmin; m <= colmax; m++) {
      if((k != i || m != j) && matrix[k][m] == true) {
        count++;
      }
    }
  }
  return count;
}


module.exports = {
  minesweeper
};
