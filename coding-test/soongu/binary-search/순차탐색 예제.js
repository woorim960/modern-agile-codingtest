function sequential_search(n, target, array) {
    for (let i = 0; i < n; i++) {
        if (array[i] === target) {
            return i + 1;
        }
    }
}

process.stdout.write("생성할 원소 개수를 입력한 다음 한 칸 띄고 찾을 문자열을 입력하세요\n");

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const target = input[1];

const array = input[2].split(' ');

console.log(sequential_search(n, target, array));

