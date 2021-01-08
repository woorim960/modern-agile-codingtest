function solution(n, k) {
    const sortArray = k.sort((a, b) => a - b);
    const firstRepeatLength = n[2];

    const firstNumber = sortArray[n[0] - 1];
    const secondNumber = sortArray[n[0] - 2];

    let sum = 0;
    let count = n[1];
    while(true){
        for (let i = 0; i < firstRepeatLength; i++) {
            if (count == 0) {
                break;
            }
            sum += firstNumber
            count--;
        }
        if (count == 0) {
            break;
        }
        sum += secondNumber;
        count--;
    }
    return sum;
}

console.log(solution([5, 8, 3], [2, 4, 5, 4, 6]));
console.log(solution([5, 7, 2], [3, 4, 3, 4, 3]));