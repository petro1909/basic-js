const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for(let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse().map((item, index, array) => {
      return array.slice(0, index + 1).reduce((sum, item) => sum + `.${item}`, '') ;
    });
    for(let j = 0; j < domain.length; j++) {
      if(result.hasOwnProperty(domain[j])) {
        result[domain[j]]++;
      } else {
        result[domain[j]] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
