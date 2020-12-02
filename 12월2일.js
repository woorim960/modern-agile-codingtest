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

// 최적화 ----

function solution(n) {
   let s = '';

   for (let i = 0 ; i < n ; i++) {
      if (i % 2) {
         s += '박';
      } else {
         s += '수';
      }
   }
   
   return s;
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

// 최적화---

function solution(s) {
    if (s.length % 2) {
        return s.substr(s.length / 2, 1)
    }
    return s.substr(s.length / 2 - 1, 2)
}

function solution(s) {
  return s.substring(parseInt((s.length-1) / 2), parseInt(s.length / 2) + 1);
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

// 최적화---
// 아니 근데 문제 이름이 왜 "가운데값더하기"인거니 상준아? 복붙했니 ㅋㅋㅋㅋ

/*
실행되지 않는 코드를 보냈다는 건.
1. 하다가 포기했거나
2. 컴파일을 안해봤거나
3. 복붙했거나

어려운 문제면 이해하겠는데 초초초초급 수준에 문제에서 이러는 건 이해도 안되고, 납득할 수 없음.
*/
function solution(a, b) {
   let c = a + b;          // 아니 여기서 a + b 해놓고 왜 밑에서 c를 안쓴거지??
   let d = (c / 2);        // 중괄호 뭔데 이거
   if( a = b ) {           // 조건문에서 대입을 해버리는 멋쟁이 전상준.
      return a;
   } else {
      return a + b + d ;   // 세미콜론은 띄어쓰기를 하면 안됨.
   }
}

// 전체적으로 들여쓰기가 안되어있음. 문제를 해결하기 위해 고민한 흔적이 보이지 않음.
// 앞으로는 문제별로 파일을 분류해주길 바람.
// 리뷰하는 입장에서는 사실 그것이 더 불편하지만, 공부하는 사람 입장에서는 그것이 더 좋으며 포트폴리오로 관리하기도 좋아짐.
// 파일만 봐도 몇 문제를 풀었는지 가늠이 되기 때문. 또한 파일별로 기능별로 커밋을 해야하기 때문에 깃허브에 커밋이력이 많이 생김.
