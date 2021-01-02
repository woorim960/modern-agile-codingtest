import { NUMBER_LENGTH } from "./NumberLength.js";

export default class Validator {
    static isNumber(value) {
        return !isNaN(value);
    }

    static isInputLength(value) {
        return value.length === NUMBER_LENGTH;
    }
}