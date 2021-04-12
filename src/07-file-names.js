/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  function count(array) {
    function countElement(el, arr) {
      return arr.reduce((acc, cur) => (cur === el ? acc + 1 : acc), 0);
    }
    const uniqueObj = array.reduce((acc, cur) => {
      acc[cur] = countElement(cur, array);
      return acc;
    }, {});
    return uniqueObj;
  }

  const numUniqueElement = count(names);
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    newNames[i] = names[i];
  }

  for (let i = newNames.length - 1; i > -1; i--) {
    if (numUniqueElement[newNames[i]] > 1) {
      numUniqueElement[newNames[i]] -= 1;
      newNames[i] += `(${numUniqueElement[newNames[i]]})`;
    }
  }
  const numUniqueElement2 = count(newNames);
  const arrValues = Object.values(numUniqueElement2);
  for (let i = 0; i < arrValues.length; i++) {
    if (arrValues[i] > 1) {
      return renameFiles(newNames);
    }
  }
  return newNames;
}

module.exports = renameFiles;
