function solution(board, moves) {
  let number, result, count, crane;
  const pocket = [];
  const boardSize = board.length;
  number = result = 0;
  moves.forEach((move) => {
    count = 0;
    crane = move - 1;
    while (true) {
      if (board[count][crane]) {
        if (
          pocket.length &&
          pocket[pocket.length - 1] === board[count][crane]
        ) {
          pocket.pop();
          result += 2;
        } else {
          pocket.push(board[count][crane]);
        }
        board[count][crane] = 0;
        break;
      }
      count++;
      if (count === boardSize) {
        break;
      }
    }
  });
  return result;
}
