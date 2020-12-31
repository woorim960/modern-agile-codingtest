import { result, inputTxt } from '../DOM.js';
import Computer from '../random/computer.js';
import Output from './output.js';


let computerInputNumbers = Computer.getRandomNumbers();

export default class BaseballGame {

    strikeCount = 0;
    ballCount = 0;

    play(){
        this.inputCount();
        this.OutputCount();
        return result;
    }

    inputCount () {
        this.ballCount = this.strikeCount = 0;
        let userNumbers = inputTxt.value.split('');

        for (let i = 0; i < 3; i++) {
            if (computerInputNumbers[i] === userNumbers[i]) {
                this.strikeCount++;
            } else if (computerInputNumbers.includes(userNumbers[i])) {
                this.ballCount++;
            }
        }
    }

    OutputCount () {
        if (this.strikeCount === 3) {
            return Output.success();
        }else if (!this.strikeCount && !this.ballCount) {
            return Output.fail();
        }else {
            Output.strikeAndball(this.strikeCount, this.ballCount);
        }
    }

}

