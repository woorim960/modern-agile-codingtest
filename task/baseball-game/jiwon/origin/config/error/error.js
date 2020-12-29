
import {inputTxt} from '../DOM.js'

export default class Error {
    static throw(inputValue) {
        if(isNaN(Number(inputValue))){
            return this.notNum();
        }else {
            this.overThreeNum(inputValue);
            this.overlapNum(inputValue);
        }
    }
    
    static notNum () {
        alert('숫자가 아닙니다.');
        inputTxt.value = '';
    }

    static overThreeNum (inputValue) {
        if (inputValue.length !== 3) {
            alert('세자리 수를 입력해주세요');
            inputTxt.value = '';
        }
    }

    static overlapNum (inputValue) {
        let delOverlap = new Set(inputValue);
        if (inputValue.split('').length !== delOverlap.size) {
            alert('숫자가 중복되었습니다.');
            inputTxt.value = '';
        }
    } 
}