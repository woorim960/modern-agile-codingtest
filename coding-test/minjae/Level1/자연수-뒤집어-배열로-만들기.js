function solution(n) {
    const answer = [];
    const reverseArray = n.toString().split('').reverse();
    
    for (let el of reverseArray) {
        answer.push(parseInt(el))
    }
    return answer;
}