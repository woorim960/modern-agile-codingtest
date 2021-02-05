function solution(print, location) {
  let count = 0;

  while (print.length) {
    let first = print.shift();
    if (print.some((v) => v > first)) {
      print.push(first);
    } else {
      count++;
      if (location === 0) break;
    }

    if (location === 0) {
      location = print.length - 1;
      continue;
    }
    location--;
  }
  return count;
}
