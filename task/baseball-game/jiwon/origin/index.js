`use strict`;

import Error from './classes/error/error.js'
import {inputBtn, inputTxt} from './classes/DOM.js';
import BaseballGame from './classes/result/baseballgame.js';

const baseballGame = new BaseballGame();

function init() {
  inputBtn.addEventListener('click', ()=> {
    let inputValue = inputTxt.value;
    Error.throw(inputValue);
    baseballGame.play();
  });
}


init();