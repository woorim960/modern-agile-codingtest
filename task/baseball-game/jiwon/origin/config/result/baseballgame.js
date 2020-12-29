import { result, inputTxt } from '../DOM.js';
import Computer from '../calcurate/random.js';
import Output from './output.js';


let computerInputNumbers = Computer.getRandomNumbers();

export default class BaseballGame {
    strike = 0;
    ball = 0;
    
    play(){
        this.inputCount();
        this.compareCount();
        
        return result;
    }

    

    inputCount () {
        let userNumbers = inputTxt.value.split('');
        console.log(computerInputNumbers)
        console.log(userNumbers);
         
        for (let i = 0; i < 3; i++) {
            if (computerInputNumbers[i] === userNumbers[i]) {
                this.strikeCount();
            } else if (inputTxt.value.includes(computerInputNumbers[i])) {
                this.ballCount();
            }
        }
    }

    strikeCount() {
        this.strike++;
        return this.strike;
    }

    ballCount() {
        this.ball++;
        return this.ball;
    }

    compareCount () {
        if (this.strikeCount === 3) {
            return Output.success();
        }else if (!this.strikeCount && !this.ballCount) {
            return Output.fail();
        }else {
            Output.strikeAndball();
        }
    }

}

