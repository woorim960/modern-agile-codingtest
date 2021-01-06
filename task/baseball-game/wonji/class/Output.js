export default class Output {
  static warning(inputValue) {
    alert("다시 입력해주세요");
    inputValue = "";
  }

  static stikeMessage() {
    result.innerHTML = `😘 정답 😘 <br/>
        🥳 게임을 재시작하시려면 밑의 재시작 버튼을 누르세요 🥳`;
  }

  static nothingMessage() {
    result.innerHTML = "😛 낫싱 😛";
  }

  static ballAndStrikeMessage(ball, strike) {
    result.innerHTML = `😶 ${ball}볼 ${strike}스트라이크 😶`;
  }
}
