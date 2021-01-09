function minNumberTimes(number, dividedNumber) {
  let count = 0;
  while (number != 1) {
    if (number % dividedNumber) {
      number--;
      count++;
    } else {
      number /= dividedNumber;
      count++;
    }
  }
  return count;
}

console.log(minNumberTimes(24, 3));
