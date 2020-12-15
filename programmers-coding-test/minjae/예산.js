function solution(d, budget) {
    const arr = d.sort((a, b) => a - b); //오름차순
    let sum = 0;
    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        counter++;
        sum += d[i]
        if (sum > budget) {
            counter--;
            break;
        }
    }
    return counter 
}
