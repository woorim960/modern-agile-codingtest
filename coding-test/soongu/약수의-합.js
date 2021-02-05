function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (Number.isInteger(n / i)) {
            answer += n / i;
        }
    }
    return answer;
}
