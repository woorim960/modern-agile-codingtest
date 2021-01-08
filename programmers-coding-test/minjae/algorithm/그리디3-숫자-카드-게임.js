function solution(row, column) {
    const RandomArrays = [];
    const minNumbers= [];

    for (let i = 0; i < row; i++) {

        let temp = [];
        for (let j = 0; j < column; j++) {
            temp.push(Math.floor(Math.random() * 9 + 1));
        }
        RandomArrays.push(temp);
    }

    let answer = [];
    for (let i = 0; i < RandomArrays.length; i++) {
        minNumbers.push(Math.min.apply(null, RandomArrays[i]));
    }

    return answer = Math.max.apply(null, minNumbers);
}

console.log(solution(5, 4));
console.log(solution(3, 3));