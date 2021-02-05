"use strict";
const rl = require("readline-sync");
let [ n, m ] = rl.question("n m input please : \n>>").split(" ");
let data = rl.question("array input please : \n>>").split(" ");
console.log(`\n입력값 :${n},${m}`);
console.log(`배열값 :${data}\n`);

function solution() {
    let minValue = [];
    let result = 0;

    for ( let i = 1; i < n ; i++ ) {
        for ( let j = 1; j < m; j++ ) {
            minValue = Math.min(data[j]);
            result = Math.max(result, minValue); 
        }
    }
    return console.log(`정답 : ${result}`);
}

solution();
