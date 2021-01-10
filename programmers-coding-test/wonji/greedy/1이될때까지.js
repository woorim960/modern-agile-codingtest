const N = prompt(`나뉠 수 입력`);
const K = prompt(`나눌 수 입력`);

function solution(N,K){
    let result = 0;
    while (N > 1) {
        if (N % K === 0 ){
            N /= K;
            result += 1
        } else {
            N -= 1
            result += 1
        }
    }
    return result;
}

console.log(solution(N,K));