function solution(s) {
    let answer = '';
    let results = '';
    answer = s.split(" ");
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[i].length; j++) {
            if (j % 2 === 0) {
                results += answer[i][j].toUpperCase();
            } else {
                results += answer[i][j].toLowerCase();             
            }
        }
        results += " ";
    }
    return results.slice(0, results.length - 1);
}
