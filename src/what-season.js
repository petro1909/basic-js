const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if(Object.getOwnPropertyNames(date).length != 0 || isNaN(Date.parse(date))) {
    throw new Error('Invalid date!');
  }
  let month = date.getMonth();
  let season = seasons[month];
  return season;
}

module.exports = {
  getSeason
};
