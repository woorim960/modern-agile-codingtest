function solution(numbers) {
    let answer = [];
    let result = [];
    const numberLens = numbers.length
    for(let i = 0; i < numberLens; i++){
        for(let j = i + 1; j < numberLens; j++){
            result.push(numbers[i] + numbers[j]);
        }
    }
    result.sort((a,b) => a - b);
    answer = Array.from(new Set(result));
    return answer;
}
