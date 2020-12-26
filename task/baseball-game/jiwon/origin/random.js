//랜덤 숫자 꺼내기!
function comSet(comPick) {
    comPick[0] = Math.floor(Math.random() * 9 + 1);
    do {
        comPick[1] = Math.floor(Math.random() * 9 + 1);
    } while (comPick[0] === comPick[1]);
    
    do {
        comPick[2] = Math.floor(Math.random() * 9 + 1);
    } while (comPick[2] === comPick[0] || comPick[1] === comPick[2]);
    return comPick;
}


export {comSet};

