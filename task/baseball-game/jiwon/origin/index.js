`use strict`;

import Error from './config/error/error.js'
import {inputBtn, inputTxt} from './config/DOM.js';
import BaseballGame from './config/result/baseballgame.js';

const baseballGame = new BaseballGame();


function init() {
  inputBtn.addEventListener('click', ()=> {
    let inputValue = inputTxt.value;
    Error.throw(inputValue);
    baseballGame.play();
  });
}


init();