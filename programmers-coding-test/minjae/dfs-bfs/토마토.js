const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[1, -1, 0, 0], [0, 0, 1, -1]];
let input = [];
let farm = [];
let ripeTomato = [];
let farmHeight, farmWidth;
farmHeight = farmWidth = 0;

function solution(ripeTomato) {
    let answer = bfs(ripeTomato);

    for (let i = 0; i < farmHeight; i++) {
        if (farm[i].indexOf(0) !== -1) return -1;
    }
    return answer;
}

function bfs(ripeTomato) {
    let tomatoCursor = 0;
    let day = 0;

    let nx, ny;
    nx = ny = 0;

    while (ripeTomato.length > tomatoCursor) {

        const [x, y] = ripeTomato[tomatoCursor++];

        for (let i = 0; i < dx.length; i++) {
            nx = x + dx[i];
            ny = y + dy[i];
            if (rangeCheck(nx, ny) && farm[nx][ny] === 0) {
                farm[nx][ny] = farm[x][y] + 1;
                ripeTomato.push([nx, ny]);
                day = farm[nx][ny] - 1; //첫날 제외해야되서 -1
            }
        }
    }
    return day;
}

function rangeCheck(x, y) {
    if (x >= 0 && x < farmHeight && y >= 0 && y < farmWidth) return true;
    return false;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    [farmWidth, farmHeight] = input[0].split(" ").map(el => parseInt(el));
    input = input.slice(1);

    farm = Array.from(Array(farmHeight), () => new Array(farmWidth));

    for (let i = 0; i < farmHeight; i++) {
        farm[i] = input[i].split(" ").map(el => parseInt(el));
    }

    for (let x = 0; x < farmHeight; x++) {
        for (let y = 0; y < farmWidth; y++) {
            if (farm[x][y] === 1) {
                ripeTomato.push([x, y]);
            }
        }
    }

    console.log(solution(ripeTomato));
})