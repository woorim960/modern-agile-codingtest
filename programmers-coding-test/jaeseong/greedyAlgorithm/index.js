"use strict";

<<<<<<< HEAD
import getCoinCount from './classes/util/getCoinCount.js';
import Screen from './classes/view/Screen.js';
import { input, btnClick } from './classes/util/DOM.js'



const coinCount = new getCoinCount();
=======
import CoinCountor from "./classes/util/CoinCountor.js";
import Screen from "./classes/view/Screen.js";
import { input, btnClick } from "./classes/util/DOM.js";

const coinCountor = new CoinCountor();
>>>>>>> upstream/master

btnClick.addEventListener("click", run);

function run() {
<<<<<<< HEAD
  const totalCoinCount = coinCount.calculate(input.value).total;
  const eachCoinCount = coinCount.calculate(input.value).count;
  Screen.print(eachCoinCount, totalCoinCount);
}

=======
  const { eachCoinCount, totalCoinCount } = coinCountor.calculate(input.value);
  Screen.print(eachCoinCount, totalCoinCount);
}
>>>>>>> upstream/master
