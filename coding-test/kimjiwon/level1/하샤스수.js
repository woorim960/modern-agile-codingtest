function solution(x) {
    const numbers = String(x).split('');
    let sum = 0;
    for (let num of numbers) {
        sum += parseFloat(num);
    }
    if (x % sum === 0) {
        return true;
    }
    return false;
}