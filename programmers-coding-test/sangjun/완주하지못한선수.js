function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    
    for(let participants in participant){
         if (participant[participants] !== completion[participants]) {
           return participant[participants];
        }
    }
}
