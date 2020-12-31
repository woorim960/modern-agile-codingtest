function solution(phone_number) {
    const starNum = phone_number.split('').slice(-4);
    
    for (let i = 0; i < phone_number.length - 4; i++) {
        starNum.unshift('*');
    }
    return starNum.join('');
}