function solution(n) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        if (i % 2) {
            answer += '박';
        } else if(!(i % 2)) {
            answer += '수';
        } 
    }
    
    return answer;
}
