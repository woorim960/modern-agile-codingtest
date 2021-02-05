const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[-1, -2, -2, -1, 1, 2, 2, 1], [-2, -1, 1, 2, -2, -1, 1, 2]]; 
let input = [];
let chessBoard = [];
let testCase = 0;
let chessBoardSide = 0;

function bfs(startX, startY, targetX, targetY) {
    const queue = [];

    let count = 0;
    let nx, ny;
    nx = ny = 0;

    chessBoard[startX][startY] = 1;
    chessBoard[targetX][targetY] = 2;

    queue.push([startX, startY]);

    while (queue.length !== 0) {
        const QUEUE_LENGTH = queue.length;
        count++;

        for (let i = 0; i < QUEUE_LENGTH; i++) {
            const [x, y] = queue.shift();

            if (startX === targetX && startY === targetY) return count = 0;

            for (let j = 0; j < dx.length; j++) {
                [nx, ny] = [x + dx[j], y + dy[j]];

                if(rangeCheck(nx, ny) && chessBoard[nx][ny] === 2) return count;
                if(rangeCheck(nx, ny) && chessBoard[nx][ny] === 0) {
                    chessBoard[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
    } 
}

function rangeCheck(x, y) {
    if (x >= 0 && x < chessBoardSide && y >= 0 && y < chessBoardSide) return true;
    return false;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    testCase = parseInt(input.shift());
    for (let i = 0; i < testCase; i++) {

        chessBoardSide = parseInt(input.shift());
        chessBoard = Array.from(Array(chessBoardSide), () => Array(chessBoardSide).fill(0));

        const [startX, startY] = input.shift().split(" ").map(el => parseInt(el));
        const [targetX, targetY] = input.shift().split(" ").map(el => parseInt(el));

        console.log(bfs(startX, startY, targetX, targetY));
    }
});