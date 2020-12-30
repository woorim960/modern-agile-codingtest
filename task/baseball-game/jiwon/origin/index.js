`use strict`;

import BaseballGame from './service/result/baseballgame.js'
import ThrowError from './service/error/errorCase.js'
import {inputBtn, inputTxt} from './service/DOM.js';

const throwError = new ThrowError();


function init() {
  inputBtn.addEventListener('click', ()=> {
    let inputValue = inputTxt.value;
    throwError.errorSituation(inputValue);
    BaseballGame.calcurator();
  });
}


init();