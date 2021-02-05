function solution(x, n) {
    const answer = [x];  
    
    let i = 1;
    let plus = x;

    while (i !== n) {
        plus += x;
        answer.push(plus);
        i++;
    }
    return answer;
}
