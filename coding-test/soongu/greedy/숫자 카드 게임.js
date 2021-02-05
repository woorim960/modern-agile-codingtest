
const rl = require("readline-sync");

let [ n, m ] = rl.question("행과 열을 입력해주세요.\n>> ").split('');
const result = [];

for (let i = 0; i < n; i++) {
  let [ data ] = rl.question("데이터를 입력해주세요.\n>> ").split('');
  result.push(Math.min(data));
}
result.sort((a, b) => a - b);
console.log(result[n - 1]);