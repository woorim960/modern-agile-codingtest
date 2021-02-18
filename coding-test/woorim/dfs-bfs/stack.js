class Stack {
  #arr;
  
  constructor() {
    this.#arr = [];
  }
  push(item) {
    this.#arr.push(item);
  }
  pop() {
    return this.#arr.pop();
  }
  peek() {
    return this.#arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
