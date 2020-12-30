
export default class Count {
  static strike(first, second, userNumArr, computerInputNumbers, strikeCount) {
    if (first === second && parseInt(userNumArr[first]) === computerInputNumbers[second]) {
      strikeCount++;
    }
    return strikeCount;
  }

  static ball(first, second, userNumArr, computerInputNumbers, ballCount) {
    if (first != second && parseInt(userNumArr[first]) === computerInputNumbers[second]) {
        ballCount++;
    }
    return ballCount;
  }
}