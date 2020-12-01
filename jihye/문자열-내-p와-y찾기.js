function solution(s){
    let answer = '';
    s.toLowerCase();
    
    const p = s.split("p").length;
    const y = s.split("y").length;
    
    if(p != y)
        answer = false;
    else
        answer = true;
    
    return answer;
}
