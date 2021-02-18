
function changeMoney(value) {
    let moneys = [10000, 5000, 1000, 500, 100, 50, 10];
    let vlaueInt = Math.floor(value);
    let i = 0;
    let counts = [];
  
    while (true) {
      if (moneys[i]) {
        let count = Math.floor(vlaueInt / moneys[i]);
        vlaueInt = vlaueInt - moneys[i] * count;
        counts[i] = count;
      } else {
        counts[i] = 0;
      }
      i++;

      if (vlaueInt === 0) {
        for (let j = 0; j < moneys.length - i; j++) {
          counts.push(0);
        }
        break;
      }
    }
    
    moneys.map((change, index) => {
      console.log(`${change}원 ${counts[index]}개`);
    });
  }

  changeMoney(6400);
  changeMoney(7200);

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

