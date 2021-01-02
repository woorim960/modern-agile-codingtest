"use strict";

import { result } from "./DOM.js";
import BaseballGame from "./BaseballGame.js";

const baseballGame = new BaseballGame();

export default class Error {
  static validationAndPlay(com, user) {

    if (user.length !== 3) {
      Error.letterKipping();
    } else if (isDuplicate(user)) {
      Error.sameNumber();
    } else if (!Number(user)) {
      Error.notNumber();
    } else {
      baseballGame.play(com, user);
    }
  } 
  
  static sameNumber() {
      result.innerHTML = "중복되지 않은 숫자를 입력해주세요";
  }
  static notNumber() {
    result.innerHTML = "문자 안돼요";
  }
  static letterKipping() {
    result.innerHTML = "선 넘지 마세요";
  }
}

function isDuplicate(user) {
  if (user[0] === user[1]) {
    return true;
  }
  if (user[1] === user[2]) {
    return true;
  }
  if (user[0] === user[2]) {
    return true;
  }
  return false;
}
