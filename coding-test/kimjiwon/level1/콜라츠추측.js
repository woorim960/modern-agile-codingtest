function solution(num) {
    let count = 0;
    for (let i = 0; i < 500; i ++) {
        if (num === 1) {
            return count;
        }
        if (num % 2) {
            num = num * 3 + 1;
            count++;
        }else { 
            num = num / 2;
            count++;
        }
    }
    if (num !== 1) {
        return -1;
    }
}
