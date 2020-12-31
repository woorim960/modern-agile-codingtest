function solution(n) {
    const temp = [];
    let sum = 0;
    
    for(let i = n; i >= n / i; i--) {
        if(!(n%i)) {    // n % i
            temp.push(i);
            if(i === n / i){    // 소괄호로 연산식을 구분해주는 것이 좋겟음.
                break;
            }
            temp.push(n / i);
        }
    }

    temp.forEach(ele => {   // ele 보단 el이라고 쓰는 
        sum += ele;
    })
    return sum;
}
