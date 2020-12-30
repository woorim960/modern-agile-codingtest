import { result, inputTxt } from '../DOM.js';
import Computer from '../calcurate/random.js';
import ResultSentence from '../result/resultCase.js';
import Count from '../calcurate/strikeBall.js';

export let strikeCount, ballCount;


let computerInputNumbers = Computer.getRandomNumbers();

export default class BaseballGame {
    
    static calcurator(){
        strikeCount = ballCount = 0;

        this.inputCount();
        this.compareCount();
        
        return result;
    }

    static inputCount () {
        let userNumArr = inputTxt.value.split('');
        for (let first = 0; first < 3; first++) {
            for (let second = 0; second < 3; second++) {
                strikeCount = Count.strike(first, second, userNumArr, computerInputNumbers, strikeCount);
                ballCount = Count.ball(first, second, userNumArr, computerInputNumbers, ballCount);
            }
        }
    }

    static compareCount () {
        if (strikeCount === 3) {
            return ResultSentence.success();
        }else if (!strikeCount && !ballCount) {
            return ResultSentence.fail();
        }else {
            ResultSentence.existBallStrike();
        }
    }

}

