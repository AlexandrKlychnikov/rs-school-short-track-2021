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
  const key = [];
  const obj = {};
  domains.forEach((el) => {
    const arr = el.split('.').reverse();
    for (let j = 0; j < arr.length; j++) {
      if (j === 0) {
        key[j] = `.${arr[j]}`;
      } else {
        key[j] = `${key[j - 1]}.${arr[j]}`;
      }
      if (key[j] in obj) {
        obj[key[j]] += 1;
      } else {
        obj[key[j]] = 1;
      }
    }
  });
  return obj;
}

/* function getDNSStats(domains) {
    const key = [];
    const obj = domains.reduce((a, c) => {
      const arr = c.split('.').reverse();
      for (let j = 0; j < arr.length; j++) {
        if (j === 0) {
          key[j] = `.${arr[j]}`;
        } else {
          key[j] = `${key[j - 1]}.${arr[j]}`;
        }
        if (key[j] in a) {
          a[key[j]] += 1;
        } else {
          a[key[j]] = 1;
        }
      }
      return a;
    }, {});
    return obj;
  } */

module.exports = getDNSStats;
