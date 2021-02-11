const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

const numbers = [];
for (let i = 1; i <= N; i++) {
  numbers.push(Number(input[i]));
}

function solution() {
  const avg = Math.round(numbers.reduce((acc, num) => acc + num) / N);
  const mid = numbers.sort((a, b) => a - b)[parseInt(N / 2)];
  const most = getMostElement(numbers);
  const betweenRange = numbers[N - 1] - numbers[0];

  return [avg, mid, most, betweenRange];
}

function getMostElement(arr) {
  const counts = arr.reduce((obj, num) => {
    obj[num] = (obj[num] || 0) + 1;
    return obj;
  }, {});

  const max = Math.max.apply(null, Object.values(counts));

  const mostElements = [];
  for (let [key, value] of Object.entries(counts)) {
    if (value === max) {
      mostElements.push(Number(key));
    }
  }

  return mostElements.length >= 2
    ? mostElements.sort((a, b) => a - b)[1]
    : mostElements[0];
}

const results = solution();
results.forEach((el) => console.log(String(el)));
