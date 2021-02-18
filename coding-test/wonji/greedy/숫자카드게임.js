// let N = prompt(`행의 개수 입력`);
// let M = prompt(`열의 개수 입력(3이하로 입력)`);

// for (i = 0; i < M; i++) {
//     if (i = 0) {
//         let firstData = prompt(`숫자들 입력`);
//     }
//     if (i = 1) {
//         let secondData = prompt(`숫자들 입력`);
//     }
//     if (i = 2) {
//         let thirdData = prompt(`숫자들 입력`);
//     } else {
//         i++
//     }
// }

// let data = [[firstData],[secondData],[thirdData]];

// function solution(data,N,M){
//     let result = 0;
//     let min_value = 0;
    
//     for(let i = 1; i < N; i++) {
//         for (let j = 1; j < M; j++) {
//             min_value = Math.min(data[j]);
//             result = Math.max(result, min_value);
//         }
//     }
//     return result;
// }

// console.log(solution(data,N,M));

const rl = require("readline-sync");
const MIN = 1;
const MAX = 10001;
const [ N, M ] = rl.question("입력해주세요.\n>> ").split(" ").map(val => parseInt(val));
const cards = [];
for (let i = 0; i < N; i++) {
  const card = []
  for (let j = 0; j < M; j++) {
    card.push(parseInt(Math.random() * (MAX - MIN) + MIN));
  } 
  cards.push(card);
}
function solution(data,N,M){
    let result = 0;
    let min_value = 0;
    for (let i = 0; i < N; i++) {
        min_value = Math.min(...data[i]); 
        // data[i] 의 배열을 “...”을 통해 언패킹한 뒤 최솟값을 반환한다.
        result = Math.max(result, min_value);
    }
    return result;
}
console.log(solution(data, N, M));