'use strict';

const SUCCESS_MESSAGE = '🎉 CONGRATULATION!! 🎉';
const NOTHING_MESSAGE = '😥 NOTHING 😥';

export default class PlayResult {
    static playResultShow = counter => {
        const { ballCount, strikeCount } = counter;
    
        let result = '';
        if (ballCount === 0 && strikeCount === 0) {
            result = NOTHING_MESSAGE;
        }
        if (ballCount !== 0) {
            result = `볼 카운트: ${ballCount} `;
        }
        if (strikeCount !== 0) {
            result += `스트라이크 카운트: ${strikeCount} `;
            if (strikeCount === 3) {
                result = SUCCESS_MESSAGE;
            }
        } 
        return result;
    }
}