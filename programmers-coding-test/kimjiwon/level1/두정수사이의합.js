function solution(a, b) {
    let min, max, result;       // Good!
    max = min = result = 0;
    if(a <= b) {    // if 뒤 공백
        min = a;
        max = b;
    }else {         // else 앞 공백
        min = b;
        max = a;
    }               // 되도록이면 js에서 제공하는 기본 문법 활용하는 것이 보기도 좋고 속도도 빠름. -> Math.min() or Math.max()
    
    for (let num = min; num <= max; num++) {    // Good!!
        result += num;
    }
    return result;  
}
