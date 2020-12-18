function solution(d, budget) {
    let sum = 0;
    let arr = d.sort((a, b) => a - b);
    let count = 0;
    
    for (let el of arr) {
        sum += el
        if (sum <= budget) {
            count++;
        }
    }
    return count;
}
