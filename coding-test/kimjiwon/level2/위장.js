const div = {};
const midArr = [];
let divNum;
function solution(clothes) {
    for (let clothe of clothes) { // clothes로 배열은 표시하였으니 엘리먼트는 clothe가 좋겠다. clo는 이해하기 어려운 변수로 판단됨.
        if (div[clothe[1]] === undefined) {
            div[clothe[1]] = clothe[0];
        }else {
            div[clothe[1]] += `,${clothe[0]}`;
        }
    }
    
    for(let i in div) {  // 인덱스 변수명은 짧을 수록 좋다. ex) i, idx
        midArr.push(div[i].split(',').length);
    }
    return parseInt(calcurator(midArr)); // parseInt()된 변수를 리턴해주는게 더 좋겠다.
}

function calcurator(midArr) {
    if (midArr.length === 1) {
        return midArr.join();
    }
    while (midArr.length > 1) {
        divNum = midArr.splice(0, 2);
        midArr.unshift((divNum[0] + 1) * (divNum[1] + 1) - 1);
    }
    return midArr.join();
}
