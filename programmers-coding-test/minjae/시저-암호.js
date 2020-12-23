function solution(s, n) {
    const arr = s.split('');
    
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const ascii = arr[i].charCodeAt();   // 반복문 안에서의 변수 선언은 좋지 않습니다!ㅎㅎ
        
        if (arr[i] == ' ') {
            result += ' ';
        } else if (ascii > 90) {
            result += String.fromCharCode((ascii + n - 97) % 26 + 97);
        } else {
            result += String.fromCharCode((ascii + n - 65) % 26 + 65);
        }
    }
    return result
}
