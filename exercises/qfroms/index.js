// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor () {
    this.first = new Stack()
    this.second = new Stack()
  }

  add(record) {
    this.first.push(record)
  }

  peek() {
    return this.first.data[0]
  }

  remove () {
    while (this.first.peek()) {
      const record = this.first.pop()
      this.second.push(record)
    }

    const record = this.second.peek()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return record
  }
}

module.exports = Queue;
