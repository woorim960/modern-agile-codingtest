function solution(n) {
    let answer = 0;
    let squareRoot = 0;
    while (squareRoot * squareRoot < n) {
        squareRoot++;
        if (squareRoot * squareRoot === n) {
            answer = ++squareRoot;
            return answer * answer;
        } 
    }
    return -1;
}
