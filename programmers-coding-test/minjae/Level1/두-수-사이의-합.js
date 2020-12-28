function solution(a, b) {
    const MIN = Math.min(a, b),
          MAX = Math.max(a, b);
    
    let answer = 0;
    for (let num = MIN; num <= MAX; num++) {
        answer += num;
    }
    
    return answer;
}
