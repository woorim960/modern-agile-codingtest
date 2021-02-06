'use strict';

function solution(s) {
    const midArr = [];
    const finArr = [];
    s.split(" ").forEach((strArr) => {
        strArr.split("").forEach((str, seq) => {
            if ((seq + 1) % 2 !== 0) {
                str = str.toUpperCase();
            } else {
                str = str.toLowerCase();
            }
           midArr.push(str);
        });
        finArr.push(midArr.join(''));
        midArr.length = 0;       //배열 초기화
    });
    return finArr.join(' ');
}
console.log(solution("try hello world"));
