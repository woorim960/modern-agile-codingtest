function solution(n, m, k) {
    const RandomArray = [];
    
    let sortArray = [];
    let firstNumber, secondNumber, sum;
    firstNumber = secondNumber = sum = 0;
    let count = m;

    for (let i = 0; i < n; i++) {
        RandomArray.push(Math.floor(Math.random() * 9 + 1));
    }

    sortArray = RandomArray.sort((a, b) => a - b);
    firstNumber = sortArray[n - 1];
    secondNumber = sortArray[n - 2];

    /* 출력 확인용 */
    console.log(sortArray);
    console.log(firstNumber);
    console.log(secondNumber);

    while (true) {
        for (let i = 0; i < k; i++) {
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
console.log(solution(5, 8, 3));