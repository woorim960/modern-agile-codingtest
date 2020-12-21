function solution(participant, completion) {
    const ob = {};
    for (let player of participant) {
        if (player in ob) {
            ob[player] += 1;     
        } else {
            ob[player] = 1;
        }
    }
    
    for (let finisher of completion) {
         ob[finisher] -= 1;         
    }
    
    for (let player of participant) {
        if (ob[player] === 1) {
            return player;
        }
    }
}
