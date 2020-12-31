`use strict`
import { numberlength } from '../utili/NumberLength.js';

export default class ComputerInputNumbers {
    random() {
        let computerInputNumber = "";
        let computerInputNumbers = "";
        let count = numberlength;

        while (count > 0) {
            computerInputNumber = Math.floor(Math.random() * (10 - 1)) + 1;
            if (!computerInputNumbers.includes(computerInputNumber)) {
                computerInputNumbers += computerInputNumber;
                count--;
            };
        }
        return computerInputNumbers;
    }
}
    

