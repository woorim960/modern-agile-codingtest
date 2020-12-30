function solution(x, n) {
    const answer = [];
    
    let i = 1;
    let plus = x;
    
    answer.push(x);
    while (i !== n) {
        plus += x;
        answer.push(plus);
        i++;
    }
    return answer;
}