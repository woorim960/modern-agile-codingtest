const cards = [];

function setCards(row, column) {
  while (cards.length !== column) {
    cards.push(rowcards(row));
  }
}

const getMaxCard = (cards) =>
  Math.max(...cards.map((card) => card.sort((a, b) => a - b)[0]));

setCards(3, 4);
console.log(getMaxCard(cards));
//대애애박 ...배열하면 안의 배열은 풀린다! 머리 딱 치고 갑니다..

//랜덤 카드 뽑기
function rowcards(row) {
  const numbers = new Set();
  while (numbers.size != row) {
    numbers.add(Math.floor(Math.random() * 9 + 1));
  }
  return [...numbers];
}
