/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  function convertListToArray(list, arr = []) {
    arr.push(list.value);
    if (list.next) {
      convertListToArray(list.next, arr);
    }
    return arr;
  }
  function convertArrayToList(arr) {
    const list = arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
    return list;
  }
  const arr = convertListToArray(l);
  const arrOut = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== k) {
      arrOut.push(arr[i]);
    }
  }
  return convertArrayToList(arrOut);
}

module.exports = removeKFromList;
