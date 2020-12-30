"use strict";

import { userInput } from "./utils/DOM.js";

export default class User {
  getInputNumber() {
    return userInput.value;
  }
}
