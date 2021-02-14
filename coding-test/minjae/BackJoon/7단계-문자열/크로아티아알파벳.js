const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () {
    const alphabetList = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

    let word = input.shift();

    alphabetList.map(alphabet => {
        while (word.includes(alphabet)) {
            word = word.replace(alphabet, 'a');
        }
    })

    console.log(word.length);
});