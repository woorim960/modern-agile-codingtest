function settingCard(row, column) {
  const cards = [];
  const compareMaxcards = [];
  while (cards.length != column) {
    cards.push(rowcards(row));
  }

  for (let i in cards) {
    compareMaxcards.push(Math.min.apply(null, cards[i]));
  }
  return Math.max.apply(null, compareMaxcards);
}

console.log(settingCard(3, 4));

//랜덤 카드 뽑기
function rowcards(row) {
  const numbers = new Set();
  while (numbers.size != row) {
    numbers.add(Math.floor(Math.random() * 9 + 1));
  }
  return [...numbers];
}
