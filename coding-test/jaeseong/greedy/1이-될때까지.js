"use strict";
const rl = require("readline-sync");
let [ n,k ] = rl.question("n m input please : \n>>").split(" ");
console.log(`\n입력값 :${n},${k}`);

function solution() {
    console.log(n,k);
    let count = 0;
    while (n !== 1) {
        if ( n % k !== 0) {
            n -= 1;
            count++;
        } else if (n % k === 0){
            n /= k; 
            count++;
        }
    }
    return console.log(`정답 : ${count}`);   
}

solution();
