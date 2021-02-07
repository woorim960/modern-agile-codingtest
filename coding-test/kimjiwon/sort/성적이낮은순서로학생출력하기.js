const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const N = +input[0];
const students = [];
let name = "";
for (let i = 1; i < N + 1; i++) {
  const student = input[i].split(" ");
  students.push({ name: student[0], value: +student[1] });
}

// students.sort((a, b) => {
//   if (a.value < b.value) return -1;
//   if (a.value > b.value) return 1;
//   return 0;
// });
// 아래처럼 하면 됨.
students.sort((a, b) => a.value - b.value);

students.forEach((el) => {
  process.stdout.write(`${el} `);
});
