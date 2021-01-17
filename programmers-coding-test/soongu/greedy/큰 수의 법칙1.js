const rl = require("readline-sync");

let [ n, m, k] = rl.question("N, M, K 입력해주세요.\n>> ").split(',');


let data = rl.question("data 입력해주세요.\n>> ").split('');

for (let i = 0; i < data.length; i++) {
  data[i] = parseInt(data[i]);
}

n = parseInt(n);
m = parseInt(m);
data.sort((a, b) => a - b);

let first = data[n - 1];
let second = data[n - 2];
let result = 0;

while(true) {
    for (let i = 0; i < k; i++) {
        if (m === 0) {
            break;
        }
        result += first;
        m--;
    }
    if (m === 0) {
            break;
    }
    result += second;
    m--;
}
console.log(result);