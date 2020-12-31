function solution(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += (a[i] * b[i]);
    }
    return sum;
}

// return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// reduce함수 알아야될듯...