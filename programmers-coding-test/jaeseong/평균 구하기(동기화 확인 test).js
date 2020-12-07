function solution(arr) {
    let sum = 0;
    let answer = 0;
    for( let i = 0 ; i < arr.length ; i++ ){
        sum = sum + arr[i];
        }
    answer = sum / arr.length;    
    return answer;
}
