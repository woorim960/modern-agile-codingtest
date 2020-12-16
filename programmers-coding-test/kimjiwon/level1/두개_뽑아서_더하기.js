function solution(numbers) {
    const sumArr = [];
    let sum, count = 0;
    numbers.forEach ((first, i) => {
        count += (i + 1);
        for (count; count < numbers.length; count++) {
            sum = first + numbers[count];
            sumArr.push(sum);
        }
        count = sum = 0;
    });
    return set(sumArr);
}


function set(setArr) {
    const result = new Set(setArr);
    return [...result].sort((a, b) => a - b);
}