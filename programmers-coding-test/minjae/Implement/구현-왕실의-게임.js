function solution(n, m) {
    const CHESS_LENGTH = 8;
    const x = n.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const y = m.charCodeAt(0) - '0'.charCodeAt(0);
    const steps = [
        [-2 , -1 ], [-1 , -2], [1, -2], [2, -1 ],
        [2, 1 ], [1, 2], [-1, 2], [-2, 1]
    ];

    let count = 0;
    let nx, ny;
    nx = ny = 0;
    for (let i = 0; i < steps.length; i++) {
        nx = x + steps[i][0];
        ny = y + steps[i][1];
        
        if (nx >= 1 && ny >= 1 && nx <= CHESS_LENGTH && ny <= CHESS_LENGTH) {
            count++;
        }
    }
    return count;
}
console.log(solution('a', '1'));
console.log(solution('f', '6'));
console.log(solution('h', '8'));