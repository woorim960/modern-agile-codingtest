function solution(n){
    let sum = 0;
    const str = n.toString().split('');
    for (let i = 0; i < str.length; i++ ){
        sum += parseInt(str[i])
    }
    return sum
}
