function solution(participant, completion) {
    const obj = {};
    for (let player of participant) {
        if (player in obj) {
            obj[player] += 1;       //객체에 있으면 키의 값에 1추가
        } else {
            obj[player] = 1;
        }
    }
    
    for (let finisher of completion) {
         obj[finisher] -= 1;          //해당 키의 값을 -1
    }
    
    for (let player of participant) {
        if (obj[player] === 1) {
            return player;
        }
    }
}
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'],['stanko', 'ana', 'mislav']));
