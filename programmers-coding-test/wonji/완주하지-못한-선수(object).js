function solution(participant, completion) {
    const ob = {
        name1 : participant.sort(),
        name2 : completion.sort()
    };
   
    for(let i=0; i < ob.name1.length; i++){
        if(ob.name1[i] !== ob.name2[i]){   
            return ob.name1[i];
        }
    }
}
