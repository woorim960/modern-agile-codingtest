const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N] = input[0].split(" ").map((val) => parseInt(val));

const students = [];
for (let i = 1; i <= N; i++) {
  const [name, grade] = input[i].split(" ");
  students.push([name, Number(grade)]);
}

students.sort((a, b) => a[1] - b[1]);
students.forEach((el) => process.stdout.write(`${el[0]} `));

