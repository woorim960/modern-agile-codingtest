const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const m = input[1];
const array = input[2].split(' ');

function sequential(n, m, array) {
    for (let i = 0; i < n; i++) {
        if (array[i] === m) return (i + 1);
    }
};



console.log(sequential(n, m, array));
