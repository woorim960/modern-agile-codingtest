function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    
    let sum, count;
    sum = count = 0;
    for (let el of d) {
        sum += el;
        if (sum < budget) {
            count++;
        }
    }
    return count;
}
