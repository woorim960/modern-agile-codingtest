function solution(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    return sum / arr.length;
}
