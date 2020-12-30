'use strict';

// import {getright} from './getright.js';
import Random from './classes/Random.js';
import BaseballGame from "./classes/BaseballGame.js";
import {inputTxt, inputBtn, resultSpace} from './classes/DOM.js';

const computerrandomnum = new Random();
computerrandomnum.computerRandomNum();

function init() {
  inputBtn.addEventListener('click', () => {
    const baseballGame = new BaseballGame();
    baseballGame.play();
  });
}

init();
