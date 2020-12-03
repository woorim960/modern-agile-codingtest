function solution(a, b) {
    let min, max, result;
    max = min = result = 0;
    if(a <= b) {
        min = a;
        max = b;
    }else {
        min = b;
        max = a;
    }
    
    for (let num = min; num <= max; num++) {
        result += num;
    }
    return result;  
}