function solution(n) {
    const reverseTernary = n.toString(3).split('').reverse();
    let answer = 0;
    
    let sum ='';
    reverseTernary.forEach(n => sum += n);
    return answer = parseInt(sum, 3);
}
