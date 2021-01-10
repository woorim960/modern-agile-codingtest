'use strict';

import { userInput } from '../utils/DOM.js';

export default class User {
    static getUserInput () {
        return userInput.value;
    }
}