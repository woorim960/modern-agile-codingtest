function solution(participant, completion) {
    let answer;
    participant.sort();
    completion.sort();
    
    
    for(let participants in participant){
         if (participant[participants] !== completion[participants]) {
           return answer = participant[participants];
        }
    }
}
