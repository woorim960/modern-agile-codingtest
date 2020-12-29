
import {inputTxt} from '../DOM.js'

export default class Error {
    static throw(inputValue) {
        if(isNaN(Number(inputValue))){
            return this.notNumber();
        }else {
            this.overThreeNumber(inputValue);
            this.overlapNumber(inputValue);
        }
    }
    
    static notNumber () {
        alert('숫자가 아닙니다.');
        inputTxt.value = '';
    }

    static overThreeNumber (inputValue) {
        if (inputValue.length !== 3) {
            alert('세자리 수를 입력해주세요');
            inputTxt.value = '';
        }
    }

    static overlapNumber (inputValue) {
        let deduplication = new Set(inputValue);
        if (inputValue.split('').length !== deduplication.size) {
            alert('숫자가 중복되었습니다.');
            inputTxt.value = '';
        }
    } 
}