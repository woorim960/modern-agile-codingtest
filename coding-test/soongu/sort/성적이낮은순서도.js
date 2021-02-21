const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
input = input.slice(1);

class Student {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
};

const array = [];
for (let i = 0; i < N; i++) {
    let inputData = input[i].split(' ');
    array.push(new Student(inputData[0], Number(inputData[1])));
}

array.sort((a, b) => a.score - b.score);
process.stdout.write(` ${array.map((student) => student.name)} `);



