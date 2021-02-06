class Queue {
  #arr;
  
  constructor() {
    this.#arr = [];
  }
  enqueue(item) {
    this.#arr.push(item);
  }
  dequeue() {
    return this.#arr.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
