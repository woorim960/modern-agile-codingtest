function solution(x, n) {
    const answer = [];  // 처음부터 x를 넣은 채로 초기화 시키면 됨. => const answer = [x];
    
    let i = 1;
    let plus = x;
    
    answer.push(x);     // 처음부터 x를 넣은 채로 초기화 시키면 됨.
    while (i !== n) {
        plus += x;
        answer.push(plus);
        i++;
    }
    return answer;
}
