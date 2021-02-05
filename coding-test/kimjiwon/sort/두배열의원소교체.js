const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const arrStore = [];

arrStore.push(input[1].split(" ").map(Number));
arrStore.push(input[2].split(" ").map(Number));

arrStore[0].sort((a, b) => a - b);
arrStore[1].sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
  //두번째 방법(비효율적)
  //   const aMin = Math.min.apply(null, arrStore[0]);
  //   const bMax = Math.max.apply(null, arrStore[1]);
  //   const alocation = arrStore[0].indexOf(aMin);
  //   const blocation = arrStore[1].indexOf(bMax);
  const aMin = arrStore[0][i];
  const bMax = arrStore[1][i];

  if (aMin > bMax - 1) break;

  arrStore[0][i] = bMax;
  arrStore[1][i] = aMin;
}

const result = arrStore[0].reduce((a, b) => {
  return a + b;
});

console.log(result);
