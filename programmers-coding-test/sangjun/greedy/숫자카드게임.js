function cardGame(row, column) {
    let cards = [];
    
    for (let i = 0; i < row; i++){
        let rowCards = [];
            for (let j = 0; j < column; j++){
                rowCards.push(Math.floor(Math.random() * 9 + 1));
            }
        cards.push(rowCards);
    }
    console.log(cards)

    return Math.max(...cards.map(rowCards => Math.min(...rowCards)));
}

console.log(cardGame(5, 4)); 