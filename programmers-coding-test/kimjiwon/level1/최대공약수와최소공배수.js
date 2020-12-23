function solution(n, m) {
    const arr = [];
    let minNum = Math.min(n, m);
    let maxNum = Math.max(n, m);
    
    arr.push(max(maxNum, minNum));
    arr.push(min(maxNum, minNum));
    
    return arr;
}

function max (maxNum, minNum) {
    return (maxNum % minNum) === 0 ? minNum : max(minNum, maxNum % minNum);
}

function min (maxNum, minNum) {
    return maxNum * minNum / max(maxNum, minNum);
}