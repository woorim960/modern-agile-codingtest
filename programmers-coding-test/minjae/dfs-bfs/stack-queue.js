function solution() {
    //Stack(후입선출: LIFO)
    const stack = [];

    stack.push(5);
    stack.push(2);
    stack.push(3);
    stack.push(7);
    stack.pop();
    stack.push(1);
    stack.push(4);
    stack.pop();

    console.log(stack);

    //Queue(선입선출: FIFO)
    const queue = [];

    queue.push(5);
    queue.push(2);
    queue.push(3);
    queue.push(7);
    queue.shift();
    queue.push(1);
    queue.push(4);
    queue.shift();

    console.log(queue);
}
solution();