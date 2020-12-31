"use strict";
import { userInput } from "./DOM.js";

export default class User {
    static inputValue() {
        let user = userInput.value;
        return user;
    }
}

