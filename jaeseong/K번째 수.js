function solution(array, commands) {
    var answer = [];                                // const로 선언
    let startNum, endNum, cutNum;                   // Good!!
    for(let l = 0;l < commands.length; l++){        // l로 선언한 이유는? , i나 idx로 인덱스임을 명시해줘야 한다.
        startNum = commands[l][0];
        endNum = commands[l][1];
        cutNum = commands[l][2];
        let out = array.slice(startNum - 1, endNum).sort((a, b) => a - b);   // for 문 안에서 let으로 초기화하면 매번 반복때마다 선언하게 됨. 효율적이지 못하다. sort를 a-b로 해준 이유?
        answer[l] = out[cutNum - 1];                // [l]에 대입하는 건 옳지 못한 코딩 습관이다. 다른 언어에서는 에러뜨면서 종료될 것임. 없는 공간에 값을 대입하려는 것이기 때문. array에는 push가 맞음.
    }
    return answer;
}
