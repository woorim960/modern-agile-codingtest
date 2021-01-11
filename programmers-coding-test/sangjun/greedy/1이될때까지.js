function untilOne(first, second) {
    let result = 0;
    
    while (first > 1) {
        if (first % second === 0) {
            first = first / second;
            result += 1;
        } else {
            first -= 1;
            result += 1;
        }
    }

    return result;
}

console.log(untilOne(25, 5));

