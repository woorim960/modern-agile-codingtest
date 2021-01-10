const MONEYS = [10000, 5000, 1000, 500, 100, 50, 10];

function changeMoney(change) {
  const counts = [];

  let i = 0;
  while (change !== 0) {
    let count = Math.floor(change / MONEYS[i]);
    change %= MONEYS[i];
    counts.push(count);

    i++;
  }

  MONEYS.map((change, index) => {
    console.log(`${change}원 ${counts[index]}개`);
  });
}

changeMoney(6400);
changeMoney(7200);
