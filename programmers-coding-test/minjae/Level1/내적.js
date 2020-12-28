function solution(a, b) {
    const arr = [];
    
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        arr.push(a[i] * b[i]);
    }
    return arr.reduce((a, b) => a + b);
}