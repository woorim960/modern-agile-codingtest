//서울에서 김서방 찾기
function solution(seoul) {
    let answer = '';
    let lens = seoul.length;
    let i = 0;
    for(i = 0;i<=lens;i++){
        if(seoul[i]==="Kim"){
            break;
        }
    }
    return "김서방은 "+i+"에 있다";
}
//--------------------------------------
//문자열 내 p와 y의 개수 세기

function solution(s){
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}
//-------------------------------------
//문자열 내림차순으로 배치하기

function solution(s) {
    const answer = s.split('').sort().reverse().join('');
    return answer;
}
---------------------------------
수박수박수박수박수?

function solution(n) {
    let answer = '';
    for(let i = 1;i<=n;i++){
    if(i%2 === 1 ){
        answer += '수';
        }
    else{
        answer += '박';
        }
    }
    return answer;
}
//-----------------------------------------
//가운데 글자 가져오기

function solution(s) {
    let answer = '';
    for(let i = 0;i < s.length;i++){
        if(s.length%2 === 0){
            answer = s.substr(Math.ceil(s.length/2)-1,Math.ceil(s.length/2));
        }
        else{
            const result = s.substr(Math.ceil(s.length/2)-1);
            answer = result.substring(0,1);
        }
    }
    return answer;
}
//----------------------------------
//두 정수 사이의 합

function solution(a, b) {
    let answer = 0;
    let smalln = 0;
    let bign = 0;
    if(a > b){
        bign = a;
        smalln = b;
    }
    else if(a<b){
        bign = b;
        smalln = a;
    }else{
        answer = a;
    }
    for(let i = smalln;i<=bign;i++){
        answer += i;
    }
    return answer;
}

//---------------------------------
//같은 숫자는 싫어

function solution(arr)
{
    let answer = [];
    const arrlen = arr.length;
    for(let i = 0;i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}