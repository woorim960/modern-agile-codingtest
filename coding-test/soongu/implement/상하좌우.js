`use strict`

const rl = require("readline-sync");

let n = rl.question("공간의 크기를 입력해주세요.\n>> ");
let a = rl.question("이동할 방향을 입력해주세요.\n>> ").toUpperCase().split('');

let traveler = [1, 1];

  for (let direction of a) {
      switch(direction) {
        case ‘R’ :
          traveler[1] += traveler[1] < n ? 1 : 0;
          break;
        case 'L' :
          traveler[1] -= traveler[1] > 1 ? 1 : 0;
          break;
        case 'U' :
          traveler[0] -= traveler[0] > 1 ? 1 : 0;
          break;
        case 'D' :
          traveler[0] += traveler[0] < n ? 1 : 0;
          break;
        default : 
          break;
      }
  }

console.log(traveler);
