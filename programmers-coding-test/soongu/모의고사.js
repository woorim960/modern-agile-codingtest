function solution(answers) {
    const personOne = [1, 2, 3, 4, 5];
    const personTwo = [2, 1, 2, 3, 2, 4, 2, 5];
    const personThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0]
    let max = 0;
    let answer = [];
    
    for (let i = 0; i < answers.length; i++) {
        if (personOne[i % personOne.length] === answers[i]) {
            count[0]++;
        } 
        if (personTwo[i % personTwo.length] === answers[i]) {
            count[1]++
        } 
        if (personThree[i % personThree.length] === answers[i]) {
            count[2]++;
        }
    }
    max = Math.max(count[0], count[1], count[2]);
    
    if (count[0] === max) {
        answer.push(1);
    }
    if (count[1] === max) {
        answer.push(2);
    }
    if (count[2] === max) {
        answer.push(3);
    }
    return answer;
}
