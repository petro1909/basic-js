const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if(!Array.isArray(names)) return false;
  if(names.length == 0) return false;
  return names.filter(item => typeof item == 'string' && item.length > 0).map(item => item.trim().toUpperCase()).sort().map(item => item[0]).join('');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
