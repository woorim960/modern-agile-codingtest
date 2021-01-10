import { result } from '../DOM.js';


export default class Output {
    //스트라이크랑 볼 존재할 때
    static strikeAndball(strike, ball) {
        if (ball < 1) {
            result.innerHTML = `${strike}스트라이크`;
        }else if (strike < 1) {
            result.innerHTML = `${ball}볼`
        }else{
            result.innerHTML = `${ball}볼 ${strike}스트라이크`;
        }
        
    }
    //하나도 안맞을때
    static fail() {
        result.innerHTML = '미싱'
    }
    //성공
    static success() {
        result.innerHTML = '🎉정답을 맞추셨습니다!🎉';
        this.newGame();
        this.resetButton();
    }
    //새로 시작 문장 작성
    static newGame() {
        let newGame = document.createElement('div');
        let newGameContent = document.createTextNode('게임을 새로 시작하시겠습니까?');
        newGame.appendChild(newGameContent);
        document.body.appendChild(newGame);
    }
    //재시작 버튼 생성
    static resetButton() {
        let button = document.createElement('button');
        button.innerText = '게임 재시작';
        button.addEventListener('click', this.restart);
        document.body.appendChild(button)
    }
    //게임 재시작 버튼 실행 시
    static restart() {
        window.location.reload();
    }
}
