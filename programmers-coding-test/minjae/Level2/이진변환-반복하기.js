function solution(s) {
    const answer = [];
    
    let temp = []
    let binaryList = s.split("");
    
    let [repeatCount, deleteCount] = [-1, 0];
    
    while (true) {
        repeatCount++;
        
        if (binaryList.length === 1) break;
        
        binaryList.map(el => {
            if (el !== '0') temp.push(el);
            else deleteCount++;
        })

        binaryList = temp.length.toString(2).split("");
        temp = [];
    }
    answer.push(repeatCount, deleteCount);

    return answer;
}