/*
* 변수명에 s만 붙임 -> 배열이기 때문.
* new Array(); -> []; 이게 일반적이다.
*/
function solution(arr) {
    let deduplications = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            deduplications.push(arr[i]);
        }
    }
    return deduplication;
}
