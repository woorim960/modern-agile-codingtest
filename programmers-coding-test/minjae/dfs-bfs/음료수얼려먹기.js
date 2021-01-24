const iceShape = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
];

const ICE_SHAPE_X = iceShape.length;
const ICE_SHAPE_Y = iceShape[0].length;

//DFS는 큐1개,스택1개 or 재귀로 구현
function solution() {
    return allFreezeIceCube();
}

function freezeIceCube(x, y) {
    if (x < 0 || y < 0 || x >= ICE_SHAPE_X || y >= ICE_SHAPE_Y) return false;
    if (iceShape[x][y] === 0) { //해당 조건이 일치하면 return 으로 빠지므로 else if 문 필요없음
        iceShape[x][y] = 2;
        freezeIceCube(x - 1, y); 
        freezeIceCube(x, y - 1);
        freezeIceCube(x + 1, y);
        freezeIceCube(x, y + 1);
        return true;
    }  
}

function allFreezeIceCube() {
    let count = 0;

    for (let i = 0; i < ICE_SHAPE_X; i++) {
       for (let j = 0; j < ICE_SHAPE_Y; j++) {
            if (freezeIceCube(i, j)) count++;
       }
   }
   return count;
}

console.log(solution());