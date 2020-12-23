function solution(participant, completion) {
    const obj = {};
    
    for(let player of participant){
        if(!obj[player]){
            obj[player] = 1;
        } else {
            obj[player] += 1;
        }
    }
    
    for (let finish of completion){
         if(obj[finish]){
            obj[finish] -= 1;
        }
    }
    
    for (let player of participant) {
        if (obj[player] === 1) {
            return player;
        }
    }
}