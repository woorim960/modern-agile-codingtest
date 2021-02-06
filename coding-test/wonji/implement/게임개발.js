const rl = require("readline-sync");
const n = parseInt(rl.question("세로크기 N입력(3이상).\n>>"));
const m = parseInt(rl.question("가로크기 N입력(50이하).\n>>"));

let x = parseInt(rl.question("현재 캐릭터의 x좌표 입력.\n>>"));
let y = parseInt(rl.question("현재 캐릭터의 y좌표 입력.\n>>"));
let direction = parseInt(rl.question("현재 캐릭터의 위치방향 입력(0:북, 1:동, 2:남, 3:서(숫자로 입력하세요)).\n>>"));

let map = 0;
let mapArray = [];
let mapSplit = 0;

for (let i = 0; i < n; i++){
  map = rl.question("지도를 작성하시오(0:육지, 1:바다).\n>>");
  mapSplit = map.split("");
  mapArray.push(mapSplit);
}

const dx = [-1, 0, 1, 0];
const dy = [ 0, 1, 0, -1];

let count = 1;
let turn_time = 0;
let nx = 0;
let ny = 0;

//console.log(mapArray);

mapArray[x][y] = '2';

//console.log(mapArray[x][y]);

//console.log(mapArray);

function turn_left(){
  direction -= 1;
  if(direction === -1){
    direction = 3;
  } 
}

while(true){
  turn_left();
  nx = x + dx[direction];
  ny = y + dy[direction];

  if (mapArray[nx][ny] === '0'){
    mapArray[nx][ny] = '2';
    //console.log(mapArray);
    x = nx;
    y = ny;
    count += 1;
    turn_time = 0;
    continue;
    }else {
    turn_time += 1;
  }

  if (turn_time === 4){
    nx = x - dx[direction];
    ny = y - dy[direction];
    if (mapArray[nx][ny] === '0'){
      x = nx;
      y = ny;
    } else{ 
    break;
    }
    turn_time = 0;
  }
}

console.log(count);
