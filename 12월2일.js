//수박수
function solution(n) {
   let a = '';

    for (let i = 0 ; i < n ; i++) {
        if (i % 2 === 0) {
            a += '수'
    }else{
        a += '박' }
    }
    return a;
}
//문자열 내림차순
function solution(s) {
    return s.split('').reverse().join('');
}
//가운데글자가져오기
function solution(s) {
    if(s.length % 2 === 0){
        return s.substr(s.length/ 2 - 1 , 2)
    }else{
        return s.substr(s.length/ 2 , 1)
    }
}
//가운데값더하기 
function solution(a, b) {
    let c = a + b ;
   let d = (c /2); 
    if( a = b ) {
        return a;
    }else {
        return a + b + d ;
    }
}
