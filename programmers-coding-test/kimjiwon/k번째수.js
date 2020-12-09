function solution(array, commands) {
    var answer = [];

    answer = commands.map(num => {
        return array.slice(num[0] - 1, num[1]).sort((a, b) => a - b)[num[2] - 1];
    });
    return answer;
}