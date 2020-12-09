function solution(array, commands) {
  const answer = [];
  let list;

  for (let i = 0; i < commands.length; i++) {
    list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });

    list = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort(function (a, b) {
        return a - b;
      });

    answer.push(list[commands[i][2] - 1]);
  }
  return answer;
}
