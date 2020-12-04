function solution(arr){
    const result = [];
    for(let seq = 0; seq <= arr.length; seq++) { // for 뒤에 공백. 나머지 너무 좋음. -> seq도 좋으나 되도록 인덱스는 i or idx를 사용.
        if(arr[seq] != arr[seq + 1]) {           // if 뒤에 공백. != 가 아닌 !== 사용할 것.
            result.push(arr[seq]);
        }
    }
    return result;
}
