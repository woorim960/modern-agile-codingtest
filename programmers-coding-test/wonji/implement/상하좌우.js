const rl = require("readline-sync");
const n = parseInt(rl.question("NxN의 정사각형 여행지를 만들거에요. N의 값을 입력해주세요.\n>>"));
console.log(n);

const plans = rl.question("움직일 LRUD를 입력해주세요(띄어쓰기 필수).\n>>").toUpperCase().split(" ");

console.log(plans);

let x = 1, y = 1;

//x축,y축 기준이 아닌 가는 수대로 했습니다.
//원래 R3번 가면 (4,1)이지만 문제에서는 R3번 가면 (1,4)이기 때문에 x,y축 반전으로 줬습니다.
const dx = [0, 0, -1, 1]; 
const dy = [-1, 1, 0, 0];
const move_types = ['L', 'R', 'U', 'D'];
let nx = 0, ny = 0;

for (let plan of plans) {
    for (i = 0; i < move_types.length; i++){
      if (plan === move_types[i]) {
        nx = x + dx[i];
        ny = y + dy[i];
      }
    }
    if (nx < 1 || ny < 1 || nx > n || ny > n){
      continue;
    }
    x = nx;
    y = ny;
}

//2번째 코드
// plans.forEach((plan) => {
//     for (let type in move_types) {
//       if (plan === move_types[type]) {
//         nx = x + dx[type];
//         ny = y + dy[type];
//       }
//     }
//     if (nx < 1 || ny < 1 || nx > n || ny > n){
//       return;
//     }
//     x = nx;
//     y = ny;
//   });

console.log(x,y);