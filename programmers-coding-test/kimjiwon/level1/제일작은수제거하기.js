function solution(arr) {
    const minNumber = Math.min.apply(null, arr);
    if (arr.length < 2) {
        arr[0] = -1;
    }else {
        arr.splice(arr.indexOf(minNumber), 1);
    }
    
    return arr;
}