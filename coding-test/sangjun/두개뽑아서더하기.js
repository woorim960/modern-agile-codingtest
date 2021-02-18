function solution(numbers) {
    const answer = [];
    let sum = 0;
    
     for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if(i !== j){
            sum = numbers[i] + numbers[j];  
            answer.push(sum)
            }
        }       
     }
    
    let numberSet = new Set(answer);
    let arraySet = Array.from(numberSet);
    arraySet.sort((a, b) => (a - b));
    return arraySet;
}
