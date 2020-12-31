export default class Check {
    static error(inputValue) {
        let nonOverlap = new Set(inputValue);
        if (inputValue.split('').length !== 3) {
            this.warning()
        }
        if (isNaN(parseInt(inputValue))) {
            this.warning()
        }
        if (inputValue.split('').length !== nonOverlap.size) {
            this.warning()
        }
    }
    static warning() {
        alert("다시 입력해주세요");
            inputValue = '';
            window.location.reload(true);
    }
}