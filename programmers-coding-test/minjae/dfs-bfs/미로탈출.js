const maze = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
];
const MAZE_X = maze.length;
const MAZE_Y = maze[0].length;

function solution(x, y) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let visitedQueue, needVisitQueue; 
    visitedQueue = needVisitQueue = [];
    
    let nx, ny;
    nx = ny = 0;

    needVisitQueue.push([x, y]);
    
    while (needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift();
        [x, y] = node;
        
        for (let i = 0; i < 4; i++) {

            nx = x + dx[i];
            ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= MAZE_X || ny >= MAZE_Y) {
                continue;
            }
            else if (maze[nx][ny] === 0) {
                continue;
            }
            if (maze[nx][ny] === 1) {
                maze[nx][ny] = maze[x][y] + 1;
                visitedQueue.push(node);
                needVisitQueue.push([nx, ny]);
            }
        }
    }
    return maze[MAZE_X - 1][MAZE_Y - 1];
    }
console.log(solution(0, 0));