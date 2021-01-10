function solution(n) {
    const newNumber = (n + '');
    return Number(newNumber.split('').sort().reverse().join(''));
}
