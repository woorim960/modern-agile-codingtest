function solution(phone_number) {
    const backNum = phone_number.substr(-4, 4),
    frontNum = phone_number.length - 4;
    let emptyArr = [];
    for(let i = 0; i < frontNum; i++){
        emptyArr.push('*');
    }
    emptyArr = emptyArr.join('');
    return emptyArr.concat(backNum);
}

/*
좋은 코딩!
 return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
*/