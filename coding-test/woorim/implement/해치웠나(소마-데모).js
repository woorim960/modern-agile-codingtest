const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  let [cnt1, cnt2] = [0, 0];
  for (let el of x) {
    if (el === "(") cnt1++;
    else if (el === ")") cnt2++;
  }
  console.log(cnt1 === cnt2 ? "YES" : "NO")
  rl.close();
}).on("close", function () {
  process.exit();
});

