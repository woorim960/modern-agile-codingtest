export default class countStrikeBall {
    static num(inputValue,computerPick){
        let strike = 0,
        ball = 0;
        for (let i = 0; i < computerPick.length; i++) {
            if(inputValue[i] === computerPick[i]) {
                strike += 1 ;
            } else if (inputValue.includes(computerPick[i])) {
                ball += 1 ;
            }
        }
        return { strike , ball } ;
    }
}
    

