'use strict'

const [n, m] = [5, 6];

const graph = [
                [1, 0, 1, 0, 1, 0],
                [1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 1],
                [1, 1, 1, 1, 0, 1]
            ];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    const queue = [[x, y]];
    
    while(queue.length !== 0) {
        [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            if (graph[nx][ny] === 0) {
                continue;
            }
            if (graph[nx][ny] === 1) {
                graph[nx][ny] = graph[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return graph[n - 1][m - 1];
}

console.log(bfs(0, 0));