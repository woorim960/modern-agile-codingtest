function solution(participant, completion) {
    let answer = '';

    let checkObj = {};
    for (let name of participant) {
        if (checkObj[name] === undefined) {           
            checkObj[name] = 1;
            continue;
        }
        checkObj[name] += 1;
    }
    
    for (let name of completion) {
        if (checkObj[name]) {
            checkObj[name] -= 1;
        }
    }
    
    for (let name of participant) {
        if (checkObj[name] >= 1) {
            answer = name;
            break;
        }
    }
    
    return answer;
}
