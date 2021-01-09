function solution(v) {
    const answer = [];
    
    for (let i = 0; i < v[i].length; i++) {
        if (v[0][i] == v[1][i]) answer.push(v[2][i]);
        if (v[1][i] == v[2][i]) answer.push(v[0][i]);
        if (v[2][i] == v[0][i]) answer.push(v[1][i]); 
    }
    return answer;
}