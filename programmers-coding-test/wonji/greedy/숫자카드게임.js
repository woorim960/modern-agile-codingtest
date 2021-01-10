let N = prompt(`행의 개수 입력`);
let M = prompt(`열의 개수 입력`);
let data = prompt(`숫자들 입력`);

function solution(data,N,M){
    let result = 0;
    let min_value = 0;
    
    for(let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            min_value = Math.min(data[j]);
            result = Math.max(result, min_value);
        }
    }
    return result;
}

console.log(solution(data,N,M));