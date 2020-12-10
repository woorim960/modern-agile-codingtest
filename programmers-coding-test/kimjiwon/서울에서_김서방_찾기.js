function solution(seoul) {
    let name;
    
    for(let seq = 0; seq < seoul.length; seq++){
        if(seoul[seq]=="Kim"){
            name=seq;
        }
    }
   const answer=`김서방은 ${name}에 있다`;
    return answer;
}