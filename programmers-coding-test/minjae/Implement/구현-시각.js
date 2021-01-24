function solution(n) {
    let count = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                if ((i % 10 === 3) 
                || (Math.floor(j / 10) === 3) 
                || (j % 10 === 3) 
                || (Math.floor(k / 10) === 3) 
                || (k % 10) === 3) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(solution(5));