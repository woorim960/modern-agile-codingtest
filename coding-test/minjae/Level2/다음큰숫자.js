function solution(n) {
    let answer = 0;
    let count = 0;
    let binaryNumber = n.toString(2);
    
    for(let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === '1') count++; 
    }
    
    while (true) {
        let answerCount = 0;
        
        n += 1;
        binaryNumber = n.toString(2);
        
        for (let i = 0; i < binaryNumber.length; i++) {
            if (binaryNumber[i] === '1') answerCount++; 
        }
        
        if (answerCount === count) {
            return answer = n;
        }
    }
}