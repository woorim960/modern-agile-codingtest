function cardGame(row, column) {
    let cards = [];
    let minCard = [];
    let minCards = [];

    for (let i = 0; i < row; i++){
        let rowCards = [];
            for (let j = 0; j < column; j++){
                rowCards.push(Math.floor(Math.random() * 9 + 1));
            }
        cards.push(rowCards);
    }
    console.log(cards)

    for (let i = 0; i < cards.length; i++){
        minCard.push(Math.min.apply(null, cards[i]));
    }
    return minCards = Math.max.apply(null, minCard);
}

console.log(cardGame(5, 4)); 