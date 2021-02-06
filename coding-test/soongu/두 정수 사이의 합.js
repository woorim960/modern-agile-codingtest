function solution(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            sum += a;
            a = a-1;
        }
        return sum;
    } else {
        for (let i = a; i <= b; i++) {
            sum += a;
            a = a+1;
        }
        return sum;
    }
}

// 최적화

/*
* for가 중복되기에 이를 하나로 짤 수 있는 방향으로 가는 것이 좋다.
* return 값이 같다면 if문이 끝나는 시점에 한번만 호출하는 것이 좋다.
* sum += a가 아닌 증가하는 값을 그대로 넣어주면 된다. -> sum += i;
* else는 최대한 삼가고, else if로 조건을 명시해주는 것이 좋다.
*/
function solution(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            sum += a;
            a = a-1;
        }
    } else {
        for (let i = a; i <= b; i++) {
            sum += a;
            a = a+1;
        }
    }
    
    return sum;
}

/*
* 선언되는 변수가 for나 while, if 등에서 한번만 사용된다면 사용된 구문 바로 상단에 선언해주는 것이 좋다. -> 어디서 사용된 것인지 알기가 좋으며, 최상단에 선언된 변수는 여러번 사용됐다는 걸 암묵적으로 알 수 있다.
* 오래 사용될, 혹은 코드의 진행을 좌지우지하는 변수들 같은 경우는 상수로 선언해주며 대문자로 선언해야한다.
* 대문자들로 지어진 변수는 상수이며, 보통 이러한 값들을 변경하는 경우 프로그램이 실행되지 않는다.
* 자바스크립트는 const와 let밖에 없기 때문에 모든 const를 대문자로 짓지 않으며, 중요한 상수값들에 한해서만 대문자로 선언한다.
* 상수는 변수보다 상단에 선언해야한다.
*/
function solution(a, b) {
    const MIN = a < b ? a : b,
          MAX = a > b ? a : b;
    
    let sum = 0;
    for (let num = MIN; num <= MAX; num++) {
        sum += num;
    }
    
    return sum;
}
