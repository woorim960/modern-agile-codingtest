"use strict";

class Queue {
  #idx;
  #queue;

  constructor() {
    this.length = 0;
    this.#idx = 0;
    this.#queue = [];
  }

  enqueue(el) {
    this.#queue.push(el);
    this.length++;
  }

  dequeue() {
    const firstElement = this.#queue[this.#idx];
    this.length--;
    this.#idx++;
    return firstElement;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [M, N] = input[0].split(" ").map((el) => parseInt(el));
const graph = [];
const queue = new Queue();

const [dx, dy] = [
  [-1, +1, 0, 0],
  [0, 0, -1, +1],
];

let unripeTomato = 0;
let ripeDaysOfAllTomatoes = 0;

function solution() {
  makeGraph();
  enqueueRipeTomatoes();
  bfs();
}

function makeGraph() {
  for (let i = 1; i <= N; i++) {
    graph.push(input[i].split(" ").map((el) => parseInt(el)));
  }
}

function enqueueRipeTomatoes() {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[x][y] === 1) {
        queue.enqueue([x, y]);
        continue;
      }
      if (graph[x][y] === 0) unripeTomato++;
    }
  }
}

function bfs() {
  while (queue.length !== 0) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx <= -1 || nx >= N || ny <= -1 || ny >= M) continue;
      if (graph[nx][ny] === -1) continue;
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y] + 1;
        ripeDaysOfAllTomatoes = graph[nx][ny] - 1;
        unripeTomato--;
        queue.enqueue([nx, ny]);
      }
    }
  }
}
solution();
ripeDaysOfAllTomatoes = unripeTomato === 0 ? ripeDaysOfAllTomatoes : -1;
console.log(ripeDaysOfAllTomatoes);
