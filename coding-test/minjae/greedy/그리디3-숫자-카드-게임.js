function solution(row, column) {
    const RandomArrays = [];
    const minNumbers= [];
    
    let answer = 0;

    for (let i = 0; i < row; i++) {

        let temp = [];
        for (let j = 0; j < column; j++) {
            temp.push(Math.floor(Math.random() * 9 + 1));
        }
        RandomArrays.push(temp);
    }

    for (let i = 0; i < RandomArrays.length; i++) {
        minNumbers.push(Math.min.apply(null, RandomArrays[i]));
    }

    /* 출력 확인용 */
    console.log(RandomArrays);
    console.log(minNumbers);

    return answer = Math.max.apply(null, minNumbers);
}

console.log(solution(5, 4));