export default class Restart {
  reset() {
    const button = document.createElement("button");
    button.innerText = "다시 시작하시겠습니까?";
    button.addEventListener("click", this.run);
    document.body.appendChild(button);
  }

  run() {
    window.location.reload();
  }
}
