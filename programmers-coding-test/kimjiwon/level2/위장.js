const div = {};
const midArr = [];
let divNum;
function solution(clothes) {
    for (let clo of clothes) {
        if (div[clo[1]] === undefined) {
            div[clo[1]] = clo[0];
        }else {
            div[clo[1]] += `,${clo[0]}`;
        }
    }
    
    for(let index in div) {
        midArr.push(div[index].split(',').length);
    }
    return parseInt(calcurator(midArr));
}

function calcurator(midArr) {
    if (midArr.length === 1) {
        return midArr.join();
    }
    while(midArr.length > 1) {
        divNum = midArr.splice(0,2);
        midArr.unshift((divNum[0] + 1) * (divNum[1] + 1) - 1);
    }
    return midArr.join();
}