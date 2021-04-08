/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let max = 0;
  let newN;
  for (let i = 0; i < str.length; i++) {
    newN = str.split('');
    newN.splice(i, 1);
    newN = +newN.join('');
    if (max < newN) max = newN;
  }
  return max;
}

module.exports = deleteDigit;
