function solution(d, budget) {
    let count, sum
    count = sum = 0;
    d.sort((a,b) => a - b);
    
    for(let i = 0; i < d.length ; i++) {
        sum += d[i];
        if (sum <= budget) {
            count++;
        } 
    }
    return count;
}
