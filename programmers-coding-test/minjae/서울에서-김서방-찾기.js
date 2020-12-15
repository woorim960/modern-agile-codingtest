function solution(seoul) {
    let answer = '';
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            answer = `김서방은 ${i}에 있다`;
            break;
        }
    }
    return answer;
}
