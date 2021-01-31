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
    let day = bfs(ripeTomato);

    for (let i = 0; i < farmHeight; i++) {
        if(farm[i].indexOf(0) !== -1) return -1;
    }
    return day;
}

function bfs(ripeTomato) {
    let tomatoCursor = 0;
    let day = 0;

    let nx, ny;
    nx = ny = 0;

    while (ripeTomato.length > tomatoCursor) {

        /*  메모리 초과 소스
          let nextRipeTomatoCount = ripeTomato.length;
          day += 1;

          for (let i = 0; i < nextRipeTomatoCount; i++) {
              [x, y] = ripeTomato[0];

              for (let j = 0; j < dx.length; j++) {
                  nx = x + dx[j];
                  ny = y + dy[j];

                  if(rangeCheck(nx, ny) && farm[nx][ny] === 0) {
                      farm[nx][ny] = 1;
                      ripeTomato.push([nx, ny]);
                  }
              }
              ripeTomato = ripeTomato.slice(1);
        */
      
        //틀렸습니다.
        const [x, y] = ripeTomato[tomatoCursor++];

        for(let i = 0; i < dx.length; i++) {
            nx = x + dx[i];
            ny = y + dy[i];
            if(rangeCheck(nx, ny) && farm[nx][ny] === 0) {
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

    for(let x = 0; x < farmHeight; x++) {
        farm[x] = input[x].split(" ").map(el => parseInt(el));

        let y = farm[x].indexOf(1);

        if(y !== -1) ripeTomato.push([x, y]);
    }

    console.log(solution(ripeTomato));
})