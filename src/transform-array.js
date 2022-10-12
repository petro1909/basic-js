const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log("Fewfewfwe");
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformedArr = [];
  let discardableIndex = -1;
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        if (i != arr.length - 1) {
          discardableIndex = i + 1;
          i++;
        } 
        break;
      case '--discard-prev':
        if(i != 0 && (i - 1) != discardableIndex){
          transformedArr.splice(i - 1, 1);
        }
        break;
      case '--double-next':
        if(i != arr.length - 1) {
            transformedArr.push(arr[i + 1])
            transformedArr.push(arr[i + 1])
            i++;
        }
        break;
      case '--double-prev':
        if(i != 0 && (i -1) != discardableIndex) {
          transformedArr.splice(i - 1, 0, transformedArr[i - 1]);
        }
        break;
      default:
        transformedArr.push(arr[i]);
        break;
    }
  }
  return transformedArr;
}

module.exports = {
  transform
};
