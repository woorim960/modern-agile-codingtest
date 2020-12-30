'use strict';

import { resultSection } from '../utils/DOM.js';

const SUCCESS_MESSAGE = '🎉 CONGRATULATION!! 🎉';
const NOTHING_MESSAGE = '😥 NOTHING 😥';

export default class ViewResult {

    static viewResultShow = (result, restart) => {
        const { ballCount, strikeCount } = result;
        
        let resultMessage = '';
        if (ballCount === 0 && strikeCount === 0) {
            resultMessage = NOTHING_MESSAGE;
        }
        if (ballCount !== 0) {
            resultMessage = `볼 카운트: ${ballCount}  `;
        }
        if (strikeCount !== 0) {
            resultMessage += `스트라이크 카운트: ${strikeCount} `;
            if(strikeCount === 3) {
                resultMessage = SUCCESS_MESSAGE;
                restart();
            }
        } 
        resultSection.innerHTML = resultMessage;
    }
}