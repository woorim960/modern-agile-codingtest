function solution(n) {
    const arr = n.toString().split('');
    
    let sum = 0;
    for (let el of arr) {
        sum += parseInt(el);
    }
    return sum;
}
