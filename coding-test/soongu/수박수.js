// 확장자 꼭 좀 입력해주세요...ㅋㅋㅋㅋㅋ

function solution(n) {
    let answer = '';
    for (let i = 1; i < n+1; i++) {
        if (i % 2) {
            answer += "수"; 
        } else {
            answer += "박";
        }
    }
        return answer;
}

/*
* return 들여쓰기
*/

function solution(n) {
    let answer = '';
    for (let i = 1; i < n+1; i++) {
        if (i % 2) {
            answer += "수"; 
        } else {
            answer += "박";
        }
    }
    return answer;
}
