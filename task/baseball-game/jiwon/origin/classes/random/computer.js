//랜덤 숫자 꺼내기!
const computerNumbers = [];

export default class Computer {
    static getRandomNumbers() {
        computerNumbers[0] = Math.floor(Math.random() * 9 + 1)+"";
        do {
            computerNumbers[1] = Math.floor(Math.random() * 9 + 1)+"";
        } while (computerNumbers[0] === computerNumbers[1]);
        
        do {
            computerNumbers[2] = Math.floor(Math.random() * 9 + 1)+"";
        } while (computerNumbers[2] === computerNumbers[0] || computerNumbers[1] === computerNumbers[2]);
        return computerNumbers;
    }
}






