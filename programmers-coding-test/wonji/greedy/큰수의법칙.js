// let N = prompt(`배열의 크기`);
// let M = prompt(`숫자가 더해지는 횟수 입력`);
// let K = prompt(`중복으로 숫자 더할 횟수 입력`);
// let data = prompt(`배열의 크기만큼 숫자들을 입력해주세요
// (띄어쓰기금지.중복숫자가능)`);

// function solution(data,N,M,K){
//     let first = data[N - 1];
//     let second = data[N - 2];
//     let count = parseInt(M / (K + 1)) * K ;
//     let result = 0;
    
//     count += M % (K + 1);
    
//     result += (count) * first;
//     result += (M - count) * second;
    
//     return result;
// }

// console.log(solution(data,N,M,K));


const N = prompt(`배열의 크기`);
const M = prompt(`숫자가 더해지는 횟수 입력`);
const K = prompt(`중복으로 숫자 더할 횟수 입력`);
const data = prompt(`배열의 크기만큼 숫자들을 입력해주세요. (띄어쓰기금지.중복숫자가능)`);

function solution(data, N, M, K) {
    let first = data[N - 1];
    let second = data[N - 2];
    let count = parseInt(M / (K + 1)) * K ;
    let result = 0;

    count += M % (K + 1);
    result += (count) * first;

    result += (M - count) * second;

    return result;
}

console.log(solution(data, N, M, K));