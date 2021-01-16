function solution(n, a) {
    const answer = [1, 1];
    const moves = a.split('');
    const moveTypes = ['L', 'R', 'U', 'D'];
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    let x, y;
    x = y = 0;
    for (let move of moves) {
        for (let i = 0; i < moveTypes.length; i++) {
            if (move == moveTypes[i]) {
                x = answer[0] + dx[i];
                y = answer[1] + dy[i];
            }
            if (x < 1 || y < 1 || x > n || y > n) {
                continue;
            }
            answer[0] = x;
            answer[1] = y;
        }
    }
    return answer;
}

console.log(solution(5, "RRRRRDDDDDLL"));
console.log(solution(5, "RRRUDD"));