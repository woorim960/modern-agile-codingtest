"use strict";


import CoinCountor from "./classes/util/CoinCountor.js";
import Screen from "./classes/view/Screen.js";
import { input, btnClick } from "./classes/util/DOM.js";

const coinCountor = new CoinCountor();


btnClick.addEventListener("click", run);

function run() {

  const { eachCoinCount, totalCoinCount } = coinCountor.calculate(input.value);
  Screen.print(eachCoinCount, totalCoinCount);
}
