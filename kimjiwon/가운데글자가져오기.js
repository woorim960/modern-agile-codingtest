function solution(s) {
    const word = s.split('');
    const length = word.length % 2 ? odd(word) : even(word);    // 변수명을 length로 선언한 이유? -> result나 centerWord 등과 같이 변수가 가진 값이 무엇인지 알도록 해주어야 함. 함수로 빼준 것 정말 잘한 일.
    return length;
}

function even (t) { // 함수명 뒤에는 공백 X
    // 이처럼 값을 바로 반환해주는 함수는 getEvenCenterWord와 같은 표현이 좋음.
    return `${t[t.length / 2 - 1] + t[t.length / 2] }`;     
}

function odd (t) { // 함수명 뒤에는 공백 X
    // 이처럼 값을 바로 반환해주는 함수는 getOddCenterWord와 같은 표현이 좋음.
    return `${t[(t.length - 1) / 2]}`;
}

