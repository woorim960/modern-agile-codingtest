function solution(d, budget) {
    let count = 0;
    d.sort((a, b) => a - b); 
    
    for (let sortd of d) {
        budget -= sortd;
        if(budget < 0)
          break;
        count++;
    }
    return count;
}
