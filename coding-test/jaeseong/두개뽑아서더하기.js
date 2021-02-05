function solution(numbers) {
    const NUMBER_LENGTH = numbers.length;
    
    let result = [];
    for(let i = 0; i < NUMBER_LENGTH; i++){
        for(let j = i + 1; j < NUMBER_LENGTH; j++){
            result.push(numbers[i] + numbers[j]);
        }
    }
    result.sort((a, b) => a - b);
    return Array.from(new Set(result));
}
