function solution(x) {
    const arrSum = x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    
    return x % arrSum === 0 ? true : false;
}