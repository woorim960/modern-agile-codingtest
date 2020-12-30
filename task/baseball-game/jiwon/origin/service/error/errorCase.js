
import {inputTxt} from '../DOM.js'

export default class ThrowError {
    errorSituation(inputValue) {
        if(isNaN(Number(inputValue))){
            return this.notNum();
        }else {
            this.overThreeNum (inputValue);
            this.overlapNum (inputValue);
        }
    }

    notNum () {
        alert('숫자가 아닙니다.');
        inputTxt.value = '';
    }

    overThreeNum (inputValue) {
        console.log(inputValue)
        if (inputValue.length !== 3) {
            alert('세자리 수를 입력해주세요');
            inputTxt.value = '';
        }
    }

    overlapNum (inputValue) {
        let delOverlap = new Set(inputValue);
        if (inputValue.split('').length !== delOverlap.size) {
            alert('숫자가 중복되었습니다.');
            inputTxt.value = '';
        }
    } 
}