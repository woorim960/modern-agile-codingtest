count MOBILE_BACK_NUMBER_LENGTH = -4;

function solution(phoneNumber) {
    const starNum = phoneNumber.split('').slice(MOBILE_BACK_NUMBER_LENGTH);
    const phoneNumberLength = phoneNumber.length - MOBILE_BACK_NUMBER_LENGTH;
    
    for (let i = 0; i < phoneNumberLength; i++) {
        starNum.unshift('*');
    }
    return starNum.join('');
}
