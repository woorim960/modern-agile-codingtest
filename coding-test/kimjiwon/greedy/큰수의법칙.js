function bigNumberRule() {
  const [n, m, k] = [5, 8, 3];
  const numbers = array(n);
  let largestNumber, secondNumber, count, result;
  largestNumber = secondNumber = count = result = 0;

  numbers.sort((a, b) => b - a);
  console.log(numbers);
  largestNumber = numbers[0];
  secondNumber = numbers[1];

  count = (m / (k + 1)) * k;
  count += m % (k + 1);

  result = count * largestNumber;
  result += (m - count) * secondNumber;

  return result;
}

console.log(bigNumberRule());

//랜덤으로 숫자 고르기
function array(arrayLength) {
  const compareNumbers = new Set();
  while (compareNumbers.size != arrayLength) {
    compareNumbers.add(Math.floor(Math.random() * 9 + 1) + "");
  }
  return [...compareNumbers];
}
