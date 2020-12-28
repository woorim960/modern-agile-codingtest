function solution(n) {
    const sq = Math.floor(Math.sqrt(n));
    
    let answer = -1;
    if (n / sq === sq) {
        answer = (sq + 1) * (sq + 1);
    }
    return answer
}