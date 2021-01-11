function giveChange(customerMoney, goodsPrice) {
    const unitMoneys = [10000 ,5000 ,1000, 500, 100, 50, 10];
    const changeUnitMoney = new Map();

    let sum = 0,
    change = customerMoney - goodsPrice;

    unitMoneys.forEach(unitMoney => {
        if (countSpendingMoneys(change, unitMoney)) {
            changeUnitMoney.set(`${unitMoney}`, countSpendingMoneys(change, unitMoney));
            change -= (unitMoney * countSpendingMoneys(change, unitMoney)); 
        }
    });

   let cnt = 0;
   for (let unitMoney in changeUnitMoney) {
       cnt += changeUnitMoney[unitMoney];
       console.log(`${unitMoney}원 : ${changeUnitMoney[unitMoney]}`);
   }

    console.log(`총 ${sum}개`);
}


function countSpendingMoneys(change, unitMoney) {
    return parseInt(change / unitMoney);
}


giveChange(10000, 4780);
giveChange(3000, 1550);
giveChange(3000, 1450);
