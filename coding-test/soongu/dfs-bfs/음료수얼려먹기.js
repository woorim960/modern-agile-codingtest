`use strict`

const icePlace = Array.from(Array(4), () => Array(7).fill(0));

const iceMaker = [ 
                    [0, 0, 1, 1, 0, 1, 0],
                    [0, 0, 0, 1, 1, 0, 0],
                    [1, 1 ,1 ,1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 1 ,0]
                ];
function dfs(x, y) {
    if (x <= -1 || x >= 4 || y <= -1 || y >= 7) {
        return false;
    }

    if (iceMaker[x][y] === 0) {
        iceMaker[x][y] = 1;
        dfs(x - 1, y);
        dfs(x, y - 1);
        dfs(x + 1, y);
        dfs(x, y + 1);
        return true;
    }
    return false;
}

let count = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
        if (dfs(i, j) === true) {
            count++;
        }
    }
}

console.log(count);