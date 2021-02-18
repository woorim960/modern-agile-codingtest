const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N] = input[0].split(" ").map(Number);

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const students = [];
for (let i = 1; i <= N; i++) {
  const [name, score] = input[i].split(" ");
  students.push(new Student(name, Number(score)));
}

function selectionSort() {
  for (let i = 0; i < students.length; i++) {
    let idx = i;
    for (let j = i + 1; j < students.length; j++) {
      if (students[j].score < students[idx].score) {
        idx = j;
      }
    }
    [students[i], students[idx]] = [students[idx], students[i]];
  }
}

function insertionSort() {
  for (let i = 1; i < students.length; i++) {
    for (let j = i; j > 0; j--) {
      if (students[j].score < students[j - 1].score) {
        [students[j], students[j - 1]] = [students[j - 1], students[j]];
      } else {
        break;
      }
    }
  }
}

function quickSort(start, end) {
  if (start >= end) return;

  const pivot = start;
  let [left, right] = [start + 1, end];

  while (left <= right) {
    while (left <= end && students[left].score <= students[pivot].score) {
      left++;
    }
    while (right > start && students[right].score >= students[pivot].score) {
      right--;
    }
    if (left > right) {
      [students[pivot], students[right]] = [students[right], students[pivot]];
    } else {
      [students[left], students[right]] = [students[right], students[left]];
    }
  }
  quickSort(start, right - 1);
  quickSort(left, end);
}

// selectionSort();
// insertionSort();
quickSort(0, students.length - 1);

students.forEach((student) => process.stdout.write(`${student.name} `));

