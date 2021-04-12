// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.arr = [];
  }

  get size() {
    return this.arr.length;
  }

  enqueue(element) {
    this.arr.push(element);
  }

  dequeue() {
    const first = this.arr[0];
    this.arr.shift();
    return first;
  }
}

module.exports = Queue;
