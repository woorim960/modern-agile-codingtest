//서울에서 김서방 찾기
function solution(seoul) {
    for (let i = 0; i <= seoul.length; i++) {
        if (seoul[i] === "Kim"){
            return "김서방은 "+i+"에 있다";
        }
    }
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
    for (let i = 1; i <= n; i++) {
        if (i % 2) {
            answer += '수';
        } else {
            answer += '박';
        }
    }
    return answer;
}

function solution(n) {
    return '수박'.repeat(n).slice(0, n);
}



//-----------------------------------------
//가운데 글자 가져오기

// 기존 코드는 동작하지 않았음.
function solution(s) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s.length % 2) {
            answer = s.substr(Math.ceil(s.length / 2) -1, 1);
        } else {
            answer = s.substr(Math.ceil(s.length / 2) -1, 2);
        }
    }
    
    return answer;
}

function solution(s) {
    return s.slice(parseInt((s.length-1)/2), parseInt(s.length/2)+1);
}

//----------------------------------
//두 정수 사이의 합

function solution(a, b) {
    let answer = 0;
    let smallNum, bigNum;
    smallNum = bigNum = 0;

    if (a > b) {
        bigNum = a;
        smallNum = b;
    } else if (a < b) {
        bigNum = b;
        smallNum = a;
    } else {
        answer = a;
    }

    for (let num = smallNum; num <= bigNum; num++) {
        answer += num;
    }

    return answer;
}

function solution(a, b) {
    const MIN = Math.min(a, b),
          MAX = Math.max(a, b);
    
    let total = 0;
    for(let num = MIN; num <= MAX; num++) {
        total += num;
    }

    return total;
}

//---------------------------------
//같은 숫자는 싫어

function solution(arr) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

function solution(arr) {
    const stack = [];
    
    arr.forEach((value) => {
        if (stack[stack.length-1] !== value)
            stack.push(value);
    });
    
    return stack;
}
