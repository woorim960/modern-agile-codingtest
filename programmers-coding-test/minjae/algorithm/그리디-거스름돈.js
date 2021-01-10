const ARRAY_MONEYS = [500, 100, 50, 10];

function solution(change) {
    let coinCount = 0;
    
    for (let money of ARRAY_MONEYS) {
        coinCount += parseInt(change / money);
        change %= money;
    }
    return coinCount;
}

console.log(solution(1260));
console.log(solution(5270));