function solution(arr) {
    const answer = [];
    const MIN = Math.min.apply(null,arr);
    
    if (arr.length == 1) {
        answer.push(-1);
    }
    
    for (let el of arr) {
        if (el !== MIN) {
            answer.push(el);
        }
    }
    return answer;
}


==============================
// 이렇게 할 수도 있습니다 ㅎㅎ
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length === 0 ? [-1] : arr;
}
