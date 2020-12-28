function solution(arr) {
    const answer = [];
    const MIN = Math.min.apply(null,arr);
    
    if(arr.length == 1) {
        answer.push(-1);
    }
    
    for(let el of arr){
        if(el !== MIN) {
            answer.push(el);
        }
    }
    return answer;
}