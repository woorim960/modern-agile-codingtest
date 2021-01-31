const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[1, -1, 0, 0], [0, 0, 1, -1]];
let input = [];
let maze = [];
let mazeHeight, mazeWidth;
mazeHeight = mazeWidth = 0;

function bfs(x, y) {
    let needVisitQueue = [];

    let nx, ny;
    nx = ny = 0;

    needVisitQueue.push([x, y]);

    while (needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift();
        [x, y] = node;

        for (let i = 0; i < dx.length; i++) {
            nx = x + dx[i];
            ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= mazeHeight || ny >= mazeWidth) continue;
            if (maze[nx][ny] === 0) continue;
            if (maze[nx][ny] === 1) {
                maze[nx][ny] = maze[x][y] + 1;
                needVisitQueue.push([nx, ny]);
            }
        }
    }
    return maze[mazeHeight - 1][mazeWidth - 1];
}

//입력 및 결과 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    [mazeHeight, mazeWidth] = input[0].split(" ").map(el => parseInt(el));
    input = input.slice(1);

    maze = Array.from(Array(mazeHeight), () => new Array(mazeWidth));
    for(let i = 0; i < mazeHeight; i++) {
        maze[i] = input[i].split("").map(el => parseInt(el));
    };

    //결과 출력
    console.log(bfs(0, 0));
});