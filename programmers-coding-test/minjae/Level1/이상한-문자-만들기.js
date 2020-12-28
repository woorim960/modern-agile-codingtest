function solution(s) {
    const array = s.split('');
    const answer = [];
    
    let count = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == ' ') {
            count = 0;
            answer.push(' ');
        } else if (count % 2 !== 0) {
            answer.push(array[i].toUpperCase())
        } else {
            answer.push(array[i].toLowerCase())
        }
          count++;
      }
    return answer.join('');
}