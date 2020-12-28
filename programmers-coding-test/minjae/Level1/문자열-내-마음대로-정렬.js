function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a,b) => {
        if (a[n] > b[n]) {
            return 1
        } else if (a[n] < b[n]) {
            return -1
        } else {
            return a.localeCompare(b)
        }
    })
    return answer;
}