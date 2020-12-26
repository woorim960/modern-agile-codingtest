export default class BaseballPlay {
    constructor() {
       
    }
    play(computerInputNumbers, userInputNumbers) {
        const isValid = numberValidator(userInputNumbers);
        
        let result = '';
        if (isValid) {
          const Counter = onCounterCheck(computerInputNumbers, userInputNumbers);
          const { ballCount, strikeCount } = Counter;
  
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
        }
          return console.log(result);
      }
}

const baseballgame =  new BaseballPlay();

baseballgame.play('123','123');
baseballgame.play('123','456');
baseballgame.play('123','321');
baseballgame.play('123','124');