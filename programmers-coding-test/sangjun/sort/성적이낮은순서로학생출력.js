const obj = {
    '홍길동': 95,
    '이순신': 77,
    '정약용': 90,
    '장보고': 70
};
const name = [];
const scores = [];

Object.entries(obj).sort(([a1, b1], [a2, b2]) => b1 - b2)
    .forEach(([a, b]) => {
        name.push(a);
        scores.push(b);
    });

console.log(`${name}
${scores}`);
