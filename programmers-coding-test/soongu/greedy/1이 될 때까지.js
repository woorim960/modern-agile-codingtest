const rl = require("readline-sync");

let [ n, k ] = rl.question("N과 K를 입력해주세요.\n>> ").split(',');

let count = 0;
console.log(n);
while(true) {
  if (n % k == 0) {
    n = n / k; 
    count++;
  } else {
    n--;
    count++;
  }
  if (n === 1) {
    break;
  }
}

console.log(count);