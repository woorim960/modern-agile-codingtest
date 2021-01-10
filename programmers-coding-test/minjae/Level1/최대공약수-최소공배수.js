function solution(n, m) {
    let answer = [];
    answer.push(greatestCommonDivisor(n, m));
    answer.push(leastCommonMultiple(n, m));
    
    return answer;
    
}
//최대 공약수
function greatestCommonDivisor(minNum, maxNum) {
    return (maxNum % minNum) === 0 ? 
        minNum : greatestCommonDivisor(maxNum, minNum % maxNum);
}
//최소 공배수
function leastCommonMultiple(minNum, maxNum) {
    return minNum * maxNum / greatestCommonDivisor(minNum, maxNum);
}