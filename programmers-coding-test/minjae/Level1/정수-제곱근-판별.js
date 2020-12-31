function solution(n) {
    const sqrtNum = Math.floor(Math.sqrt(n));
    
    let answer = -1;
    if (n / sqrtNum === sqrtNum) {
        answer = (sqrtNum + 1) * (sqrtNum + 1);
    }
    return answer
}
