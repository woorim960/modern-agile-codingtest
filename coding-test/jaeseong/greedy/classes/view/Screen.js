import { result } from '../util/DOM.js';

export default class Screen {
    static print (count, total) {
        result.innerHTML = `오백원 ${count[0]}개 백원 ${count[1]}개 오십원 ${count[2]} 십원 ${count[3]}개 동전 총 개수 : ${total}`; 
    }
}