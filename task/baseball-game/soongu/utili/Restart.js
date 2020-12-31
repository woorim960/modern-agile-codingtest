export default class Restart {
    reset() {
        const button = document.createElement('button');
        button.innerText = "다시 시작하시겠습니까?";
        button.addEventListener('click', this.restart);
        document.body.appendChild(button);
    };

    restart() {
        window.location.reload();
    }
}