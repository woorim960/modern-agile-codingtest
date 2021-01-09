const cards = [];

function setCards(row, column) {
  while (cards.length !== column) {
    cards.push(rowcards(row));
  }
}

function getMaxCard() {
  const minCards = [];
  for (let i in cards) {
    minCards.push(Math.min.apply(null, cards[i]));
  }
  return Math.max.apply(null, minCards);
}

setCards(3, 4);
console.log(getMaxCard());

//랜덤 카드 뽑기
function rowcards(row) {
  const numbers = new Set();
  while (numbers.size != row) {
    numbers.add(Math.floor(Math.random() * 9 + 1));
  }
  return [...numbers];
}
