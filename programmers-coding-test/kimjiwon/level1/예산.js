function solution(d, budget) {
    const sortDArr = d.sort((a,b) => a - b);
    let count = 0;
    sortDArr.forEach(ele => {
        budget -= ele;
        if(budget >= 0) {
            count++;
        }
    });
    return count;
}
