function solution(n) {
    const mapField = [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
    ];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    let x = n[0];
    let y = n[1];
    let direction = n[2];

    let nx, ny, turnTime;
    nx = ny = turnTime = 0;

    let count = 1;
    mapField[x][y] = 2; //현재 값 카운트
    while (true) { 
        direction--;
        if (direction === -1) {
            direction = 3;
        }
        nx = x + dx[direction];
        ny = y + dy[direction];

        if (mapField[nx][ny] === 0) {
            mapField[nx][ny] = 2;
            x = nx;
            y = ny;
            count++;
            turnTime = 0;
            continue;
        } else {
            turnTime++;
        }

        if (turnTime === 4) {
            nx = x - dx[direction];
            ny = y - dy[direction];
            if (mapField[nx][ny] === 0) {
                x = nx;
                y = ny;
            } else break;
            
            turnTime = 0;
        }
    }
    return count;
};
console.log(solution([1, 1, 0]));