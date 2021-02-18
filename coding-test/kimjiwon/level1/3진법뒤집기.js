function solution(n) {
    let str = n.toString(3).split('').reverse().join('');
    
    let num = parseInt (str, 3);
    return num;
}

