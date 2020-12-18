function solution(numbers) {
    const set = new Set();
    let answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    
    set.forEach(number => answer.push(number));
    answer = Array.from(set);
    
    return answer.sort((a, b) => (a - b));
}
