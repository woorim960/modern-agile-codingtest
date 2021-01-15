function untilOne(n, k) {
    let count = 0;
    
    while (n > 1) {
        if (n % k === 0) {
            n /= k;
            count += 1;
        } else {
            n -= 1;
            count += 1;
        }
    }

    return count;
}

console.log(untilOne(25, 5));

