const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    //교재에 나온 풀이 말고 다른 방법으로 풀어봄 :)
    const [n, k] = input.shift().split(" ").map(el => parseInt(el));
    const listOne = input[0].split(" ").map(el => parseInt(el));
    const listTwo = input[1].split(" ").map(el => parseInt(el));

    let [minOne, maxTwo, minIndex, maxIndex] = [0, 0, 0, 0];

    for(let i = 0; i < k; i++) {
        [minOne, maxTwo] = [Math.min(...listOne), Math.max(...listTwo)];
        [minIndex, maxIndex] = [listOne.indexOf(minOne), listTwo.indexOf(maxTwo)];
        
        [listOne[minIndex], listTwo[maxIndex]] = [listTwo[maxIndex], listOne[minIndex]];
    }
    console.log(listOne.reduce((a, b) => a + b));
});