function solution(numbers) {
  numbers.sort((a, b) => ("" + a + b > "" + b + a ? -1 : 1));
  if (numbers[0] === 0) return "0";
  return numbers.join("");
}
