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

    queue.unshift(5);
    queue.unshift(2);
    queue.unshift(3);
    queue.unshift(7);
    queue.pop();
    queue.unshift(1);
    queue.unshift(4);
    queue.pop();

    console.log(queue);
}