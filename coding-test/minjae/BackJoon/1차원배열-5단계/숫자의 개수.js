function solution(n, m, x) {
    const COMPARISON_LENGTH = 10;
    const comparisonList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    const multipleNum = n * m * x;
    const multipleList = multipleNum.toString().split('');

    const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < COMPARISON_LENGTH; i++) {
        for (let j = 0; j < COMPARISON_LENGTH; j++) {
           if (multipleList[i] === comparisonList[j]) answer[j] += 1;
        }
    }
    return answer;
}

console.log(solution(150, 266, 427));