const rl = require("readline-sync");

const MIN = 1;
const MAX = 10001;
const [ N, M ] = rl.question("입력해주세요.\n>> ").split(" ").map(val => parseInt(val));

const cards = [];
for (let i = 0; i < N; i++) {
  const card = []
  for (let j = 0; j < M; j++) {
    card.push(parseInt(Math.random() * (MAX - MIN) + MIN));
  }
  console.log(`card : [${card}]`);
  
  cards.push(card);
}
console.log(`cards : ${cards}\n\n`);

// solution
function 숫자카드게임(cards) {
  smallestCards = cards.map(card => card.sort((a, b) => a - b)[0]);
  console.log(`가장 작은 카드들 : ${smallestCards}`);
  
  return Math.max(...smallestCards);
}

const maxCard = 숫자카드게임(cards);
console.log(`해답(가장 큰 카드) : ${maxCard}`);

const onelineSolve = (cards) => Math.max(...cards.map(card => card.sort((a, b) => a - b)[0]));
console.log(`한 줄 풀이 : ${onelineSolve(cards)}`);

