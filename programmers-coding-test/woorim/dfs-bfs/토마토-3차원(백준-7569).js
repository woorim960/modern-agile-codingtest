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
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [M, N, H] = input[0].split(" ").map((el) => parseInt(el));
const graph = [];
const queue = new Queue();

const [dx, dy, dz] = [
  [-1, +1, 0, 0, 0, 0],
  [0, 0, -1, +1, 0, 0],
  [0, 0, 0, 0, -1, +1],
];

let unripeTomato = 0;
let ripeDaysOfAllTomatoes = 0;

function solution() {
  makeGraph();
  enqueueRipeTomatoes();
  bfs();
}

function makeGraph() {
  for (let i = 0; i < H; i++) {
    graph.push(new Array());
    for (let j = 1; j <= N; j++) {
      graph[i].push(input[j].split(" ").map((el) => parseInt(el)));
    }
    input = input.slice(N);
  }
}

function enqueueRipeTomatoes() {
  for (let x = 0; x < H; x++) {
    for (let y = 0; y < N; y++) {
      for (let z = 0; z < M; z++) {
        if (graph[x][y][z] === 1) {
          queue.enqueue([x, y, z]);
          continue;
        }
        if (graph[x][y][z] === 0) unripeTomato++;
      }
    }
  }
}

function bfs() {
  while (queue.length !== 0) {
    const [x, y, z] = queue.dequeue();

    for (let i = 0; i < 6; i++) {
      const [nx, ny, nz] = [x + dx[i], y + dy[i], z + dz[i]];
      if (nx <= -1 || nx >= H || ny <= -1 || ny >= N || nz <= -1 || nz >= M)
        continue;
      if (graph[nx][ny][nz] === -1) continue;
      if (graph[nx][ny][nz] === 0) {
        graph[nx][ny][nz] = graph[x][y][z] + 1;
        ripeDaysOfAllTomatoes = graph[nx][ny][nz] - 1;
        unripeTomato--;
        queue.enqueue([nx, ny, nz]);
      }
    }
  }
}
solution();
ripeDaysOfAllTomatoes = unripeTomato === 0 ? ripeDaysOfAllTomatoes : -1;
console.log(ripeDaysOfAllTomatoes);

