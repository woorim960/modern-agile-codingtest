function bigNumberRule(firstLine) {
  const rule = firstLine.split(" ");
  const numbers = array(rule[0]);
  let largestNumber, secondNumber, count, result;
  largestNumber = secondNumber = count = result = 0;

  numbers.sort((a, b) => b - a);
  console.log(numbers);
  largestNumber = numbers[0];
  secondNumber = numbers[1];

  count = (+rule[1] / (+rule[2] + 1)) * +rule[2];
  count += +rule[1] % (+rule[2] + 1);

  result = count * largestNumber;
  result += (+rule[1] - count) * secondNumber;

  return result;
}

console.log(bigNumberRule("5 8 3"));

//랜덤으로 숫자 고르기
function array(arrayLength) {
  const compareNumbers = new Set();
  while (compareNumbers.size != arrayLength) {
    compareNumbers.add(Math.floor(Math.random() * 9 + 1) + "");
  }
  return [...compareNumbers];
}
