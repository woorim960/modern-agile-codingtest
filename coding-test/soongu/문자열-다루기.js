function solution(s) {
    let answer = false;
    if ((s.length === 4 || s.length === 6)) {
        for (let i = 0; i < s.length; i++) {
            console.log(parseInt(s[i]));
            if (Number.isInteger(parseInt(s[i]))) {
                answer = true;
            } else {
                answer = false;
                break;
            }
        }
    } else {
        answer = answer;
    }
    return answer;
}
