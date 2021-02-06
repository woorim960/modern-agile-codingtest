function solution(participant, completion) {
    const obj = {};
    
    for (let participants of participant) {
        if (participants in obj) {
            obj[participants] += 1;
        } else {
            obj[participants] = 1;
        }
    }
    
    for (let completions of completion) {
         obj[completions] -= 1;
    }
    
    for (let participants of participant) {
        if (obj[participants] >= 1) {
            return participants;
        }
    }
}
