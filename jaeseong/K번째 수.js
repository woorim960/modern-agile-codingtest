function solution(array, commands) {
    var answer = [];
    let startNum, endNum, cutNum;
    for(let l = 0;l < commands.length; l++){
        startNum = commands[l][0];
        endNum = commands[l][1];
        cutNum = commands[l][2];
        let out = array.slice(startNum - 1, endNum).sort((a, b) => a - b);
        answer[l] = out[cutNum - 1];
    }
    return answer;
}
