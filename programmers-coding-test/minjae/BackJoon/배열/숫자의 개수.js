function solution(n, m, x) {
    const comparisonList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const multipleNum = n * m * x;
    const multipleList = multipleNum.toString().split('');

    let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
           if (multipleList[i] === comparisonList[j]) {
              answer[j] += 1;
           } 
        }
    }
    return answer;
}

console.log(solution(150, 266, 427));