function solution(participants, completions) {
    let answer = '';
    const obj = {};
    
    for (let participant of participants) {
        if (!obj[participant]) {
            obj[participant] = 1;
        } else {
            obj[participant] += 1;
        }
    }
    
    for (let completion of completions) {
        if (obj[completion]) {
            obj[completion] -= 1;
        }
    }
    
    for (let participant of participants) {
        if (obj[participant] >= 1) {
            answer = participant;
        }
    }
    return answer;
}
