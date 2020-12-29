
//스트라이크 계산
function strike(first, second, userNumArr, computerInputNumbers, strikeCount) {
    if (first === second && parseInt(userNumArr[first]) === computerInputNumbers[second]) {
      strikeCount++;
    }
    return strikeCount;
}
  //볼 계산
function ball(first, second, userNumArr, computerInputNumbers, ballCount) {
    if (first != second && parseInt(userNumArr[first]) === computerInputNumbers[second]) {
        ballCount++;
    }
    return ballCount;
}
//하나도 안맞을때
function fail() {
    result.innerHTML = '미싱'
}



export {strike, ball, fail};