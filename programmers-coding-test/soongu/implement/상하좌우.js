`use strict`

const rl = require("readline-sync");

let n = rl.question("공간의 크기를 입력해주세요.\n>> ");
let a = rl.question("이동할 방향을 입력해주세요.\n>> ").toUpperCase().split('');

let traveler = [1, 1];

  for (let direction of a) {
      if (direction === 'R') {
        if (traveler[1] < n) {
          traveler[1] += 1;
        }
      } else if (direction === 'L') {
          if (traveler[1] > 1) {
            traveler[1] -= 1;
          }
      } else if (direction === 'U') {
          if (traveler[0] > 1) {
            traveler[0] -= 1;
          }
      } else if (direction === 'D') {
            if (traveler[0] < n) {
            traveler[0] += 1;
          }
      }
  }

console.log(traveler);