const maze = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
];

const [MAZE_HEIGHT, MAZE_WIDTH] = [maze.length, maze[0].length];

//BFS는 큐2개 필요
function solution(x, y) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const needVisitQueue = [];

    let nx, ny;
    nx = ny = 0;

    needVisitQueue.push([x, y]);
    
    while (needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift();
        [x, y] = node;
        
        for (let i = 0; i < 4; i++) {
            nx = x + dx[i];
            ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= MAZE_HEIGHT || ny >= MAZE_WIDTH) continue;
            if (maze[nx][ny] === 0) continue;
            if (maze[nx][ny] === 1) { //continue 때문에 해당 조건이 일치하면 아래 구문은 실행하지 않음, else if 사용하지 않아도됨
                maze[nx][ny] = maze[x][y] + 1;
                needVisitQueue.push([nx, ny]);
            }
        }
    }
    return maze[MAZE_HEIGHT - 1][MAZE_WIDTH - 1];
}
console.log(solution(0, 0));