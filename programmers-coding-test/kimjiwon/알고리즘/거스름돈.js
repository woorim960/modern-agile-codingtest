function giveChange(customerMoney, goodsPrice) {
    const unitMoney = [10000 ,5000 ,1000, 500, 100, 50, 10];
    const changeUnitMoney = new Map();

    let sum = 0,
    change = customerMoney - goodsPrice;

    unitMoney.forEach(el => {
        if (calcurate(change, el)) {
            changeUnitMoney.set(`${el}`, calcurate(change, el));
            change -= (el * calcurate(change, el)); 
        }
    });

    [...changeUnitMoney].forEach(el => {
        sum += el[1];
        console.log(`${el[0]}원 : ${el[1]}개` );
    });

    console.log(`총 ${sum}개`);
}


function calcurate(change, el) {
    return parseInt(change / el);
}


giveChange(10000, 4780);
giveChange(3000, 1550);
giveChange(3000, 1450);

