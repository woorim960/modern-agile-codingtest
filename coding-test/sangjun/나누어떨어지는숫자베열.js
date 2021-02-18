function solution(arr, divisor) {
    const answer = [];
    arr.sort((a,b) => (a - b));
   
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % divisor === 0){
            answer.push(arr[i]);
            
        }
        if (answer.length === 0){
            answer.push(-1);
            console.log(answer);
        }
    }
    return answer;
}
