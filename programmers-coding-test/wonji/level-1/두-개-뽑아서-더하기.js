function solution(numbers) {
    const num = [];
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j] ;
            num.push(sum);
        }
    }
    const result = new Set(num);
    return [...result].sort((a, b) => a - b);
}
