function solution(arr){
    const result = [];
    for(let seq = 0; seq <= arr.length; seq++) {
        if(arr[seq] != arr[seq + 1]) {
            result.push(arr[seq]);
        }
    }
    return result;
}