// const N = prompt(`나뉠 수 입력`);
// const K = prompt(`나눌 수 입력`);

// function solution(N,K){
//     let result = 0;
//     while (N > 1) {
//         if (N % K === 0 ){
//             N /= K;
//             result += 1
//         } else {
//             N -= 1
//             result += 1
//         }
//     }
//     return result;
// }

// console.log(solution(N,K));


const N = prompt(`나뉠 수 입력`);
const K = prompt(`나눌 수 입력`);

function solution(N, K){
    let cnt = 0;
    while (N !== 1) {
      N = N % K ? N - 1 : N / K;  
      // N이 K로 나눠지지 않으면 N에서 1을 빼고, 나눠지면 N / K를 수행하여 N에 대입한다.
      cnt++;
    }
    return cnt;
}

console.log(solution(N, K));