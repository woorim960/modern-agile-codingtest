function solution(participants, completions) {
    let answer = '';
    const myMap = new Map();
    
    for (const participant of participants) {
        if (!myMap.get(participant)) {
           myMap.set(participant, 1);
        } else {
            myMap.set(participant, myMap.get(participant) + 1)
        }
    }
  
    for (const completion of completions) {
        if (myMap.get(completion)) {
           myMap.set(completion, myMap.get(completion) - 1);
        } 
    }
    
    for(const participant of participants){
        if(myMap.get(participant) && myMap.get(participant) >=1 ){
            answer = participant;
        }
    }
    return answer;
}
