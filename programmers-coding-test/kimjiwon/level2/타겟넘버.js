function solution(numbers, target) {
  return dfs(0, numbers, target);
}

function dfs(startIndex, numbers, target) {
  return (function cal(num, index) {
    if (index === numbers.length) {
      if (num === target) return 1;
      return 0;
    }
    let first = num + numbers[index];
    let second = num - numbers[index];
    return cal(first, index + 1) + cal(second, index + 1);
  })(0, startIndex);
}
