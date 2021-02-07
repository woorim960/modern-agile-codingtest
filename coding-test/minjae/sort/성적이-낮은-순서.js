const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const studentCount = parseInt(input.shift());
    const result = {};

    for (let i = 0; i < studentCount; i++) {
        let [studentName, studentPoint] = input[i].split(" ");
        result[studentPoint] = studentName;
    }

    console.log(Object.values(result).join(" "));
});

/*
 * 이걸 어찌 리뷰해드려야하나 하다가 주석으로 대신할게요!
 */

/*
 * 일단 해당 알고리즘은 오답입니다!
 * 홍길동 50, 이순신 50 이라고 입력됐을 때 홍길동은 사라지게 돼요 ㅎㅎ
 * 근데 신기한게.. 점수로 정렬을 안해주는데도 정렬돼서 나오네요?? Object.values()로 호출하면 키로 정렬돼서 나오는 건가요? 내일 알려주세요 ㅎㅎ
 */
