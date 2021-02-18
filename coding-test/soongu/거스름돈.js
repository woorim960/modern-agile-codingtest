let money = 1893;
let count = 0;

const list = [500, 100, 50, 10];

for (let coin of list) {
    count += parseInt(money / coin);
    money = money % coin
}
