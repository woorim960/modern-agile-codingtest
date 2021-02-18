function solution(N, stages) {
  const temp = {},
    dicSort = [],
    result = [];

  let failNumbers = 0,
    total = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let stageNum = stages.filter((el) => el === i).length;
    if (stageNum === 0) {
      failNumbers = 0;
    } else {
      failNumbers = stageNum / total;
    }
    total -= stageNum;
    temp[i] = failNumbers;
  }

  for (let failValue in temp) {
    dicSort.push([failValue, temp[failValue]]);
  }

  dicSort.sort((a, b) => b[1] - a[1]);

  dicSort.forEach((el) => result.push(parseInt(el[0])));
  return result;
}
