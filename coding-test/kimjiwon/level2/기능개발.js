function solution(progresses, speeds) {
  const result = [];

  while (speeds.length > 0) {
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    let count = 0;
    while (progresses[0] > 99) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      result.push(count);
    }
  }

  return result;
}
