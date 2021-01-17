"use strict";

const rl = require("readline-sync");
let [ n, m, k ] = rl.question("n m k input please : \n>>").split(" ");
let data = rl.question("array input please : \n>>").split(" ");
console.log(`\n입력값 :${n},${m},${k}`);
console.log(`배열값 :${data}`);

function solution() {
    data.sort();
    let first = data[n - 1];
    let second = data[n - 2];
    
    let count = parseInt(m / (k + 1)) * k;
    count += m % (k + 1);
    
    let result = 0;
    result += (count) * first;
    result += (m - count) * second;
    return console.log(result);
}

solution();
