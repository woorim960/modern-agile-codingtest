function solution(s) {
    const middle = Math.floor(s.length / 2);
    if (s.length % 2) {
        return s.slice(middle, middle + 1)
    } else {
        return s.slice(middle - 1, middle + 1)
    }
}