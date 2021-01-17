function solution(n, k) {
    let resultCount = 0;

    while (true) {
        if (n == 1) {
            break;
        }

        if (n % k !== 0) {
            n -= 1;
            resultCount++;
        } else {
            n /= k;
            resultCount++;
        }
    }
    return resultCount;
}

console.log(solution(25, 3));