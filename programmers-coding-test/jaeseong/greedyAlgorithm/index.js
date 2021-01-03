"use strict";

import getCoinCount from './classes/util/getCoinCount.js';
import Screen from './classes/view/Screen.js';
import { input, btnClick } from './classes/util/DOM.js'



const coinCount = new getCoinCount();

btnClick.addEventListener("click", run);

function run() {
  const totalCoinCount = coinCount.calculate(input.value).total;
  const eachCoinCount = coinCount.calculate(input.value).count;
  Screen.print(eachCoinCount, totalCoinCount);
}

