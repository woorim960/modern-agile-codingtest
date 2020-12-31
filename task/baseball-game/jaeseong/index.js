"use strict";

import Random from "./classes/Random.js";
import { btnClick } from "./classes/DOM.js";
import Error from "./classes/Error.js";
import User from "./classes/UserNum.js";

const comNum = Random.question();

function run() {
  console.log(comNum);
  btnClick.addEventListener("click", ()=> {
    let userNum = User.inputValue();
    Error.validationAndPlay(comNum, userNum);
  });
}

run();
