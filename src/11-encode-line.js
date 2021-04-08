/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const arr = [];
  let prev = false;
  for (let i = 0; i < str.length; i++) {
    if (!prev) {
      arr.push(str[i]);
      prev = str[i];
    } else if (prev === str[i]) {
      if (arr[arr.length - 1].length > 1) {
        arr[arr.length - 1] = (+arr[arr.length - 1][0] + 1) + arr[arr.length - 1][1];
      } else {
        arr[arr.length - 1] = `2${arr[arr.length - 1]}`;
      }
    } else if (prev !== str[i]) {
      arr.push(str[i]);
      prev = str[i];
    }
  }
  return arr.join('');
}

/* let num;
  let prev;
  const arr = str.split('').reduce((accum, cur, i) => {
    if (cur !== prev) {
      const regexp = new RegExp(`${cur}`, 'g');
      num = str.match(regexp);
      if (num.length > 1) {
        accum.push(num.length + str[i]);
      } else {
        accum.push(str[i]);
      }
      prev = cur;
      return accum;
    }
    return accum;
  }, []);
  return arr.join(''); */

module.exports = encodeLine;
