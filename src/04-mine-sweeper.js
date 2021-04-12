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
  let sum = 0;
  const matrixDuo = matrix.map((a) => a.map((b) => (b === true ? 1 : 0)));
  const matrixOut = [];
  for (let i = 0; i < matrixDuo.length; i++) {
    matrixOut.push([]);
    for (let j = 0; j < matrixDuo[i].length; j++) {
      for (let n = 0; n < 3; n++) {
        for (let m = 0; m < 3; m++) {
          if ((i - 1 + n) >= 0 && (j - 1 + m) >= 0) {
            if ((i - 1 + n) < matrixDuo.length && (j - 1 + m) < matrixDuo[i].length) {
              sum += matrixDuo[i - 1 + n][j - 1 + m];
            }
          }
        }
      }
      matrixOut[i][j] = sum - matrixDuo[i][j];
      sum = 0;
    }
  }
  return matrixOut;
}

module.exports = minesweeper;
