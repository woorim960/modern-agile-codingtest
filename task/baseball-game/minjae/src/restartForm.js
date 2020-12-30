'use strict';

import BaseballGame from '../main.js';
import { appSection } from '../utils/DOM.js';

const RESTART_HTML = `
    <p class="restart-question"> 게임을 다시 시작하시겠습니까? </p>
    <button class="restart-btn"> 재시작 버튼 </button>
`;

export default class Restart {
    static restartForm = () => {
        const divSection = document.createElement('div');
        const restartSection = appSection.appendChild(divSection);
  
        restartSection.classList.add('restart-section');
  
        const restartForm = document.querySelector('.restart-section');
  
        restartForm.innerHTML = RESTART_HTML;
  
        const restartBtn = document.querySelector('.restart-btn');

        restartBtn.addEventListener('click', () => {
            const baseball = new BaseballGame();
            baseball.gameInit();
            appSection.removeChild(restartSection);
          });
    }
}