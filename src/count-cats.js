const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if(matrix.length == 0) return 0;
  let count = 0;
  for(let i = 0; i < matrix.length; i++) {
    let temp = matrix[i].filter(item => item == '^^');
    count+= temp.length;
  }
  return count;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
