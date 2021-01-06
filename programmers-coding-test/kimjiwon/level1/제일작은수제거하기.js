function solution(arr) {
    const minNumber = Math.min.apply(null, arr);
    if (arr.length < 2) {
        arr[0] = -1;
    }else {
        arr.splice(arr.indexOf(minNumber), 1);
    }
    
    return arr;
}


// 이렇게도 할 수 있음.   
function solutions(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length === 0 ? [-1] : arr;
}
//WOW!!!!

