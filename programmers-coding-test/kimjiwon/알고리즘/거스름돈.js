function giveChange(customerMoney, goodsPrice) {
    const unitMoney = [10000 ,5000 ,1000, 500, 100, 50, 10];
    const changeUnitMoney = new Map();

    let sum = 0,
    change = customerMoney - goodsPrice;

    unitMoneys.forEach(unitMoney => {
        if (calcurate(change, unitMoney)) {
            changeUnitMoney.set(`${unitMoney}`, calcurate(change, unitMoney));
            change -= (unitMoney * calcurate(change, unitMoney)); 
        }
    });

   let cnt = 0;
   for (let unitMoney in changeUnitMoney) {
       cnt += changeUnitMoney[unitMoney];
       console.log(`${unitMoney}원 : ${changeUnitMoney[unitMoney]}`);
   }

    console.log(`총 ${sum}개`);
}


function calcurate(change, el) {
    return parseInt(change / el);
}


giveChange(10000, 4780);
giveChange(3000, 1550);
giveChange(3000, 1450);
