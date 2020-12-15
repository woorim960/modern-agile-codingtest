function solution(d, budget) {
    let result = 0;
    let temp = 0;
    for (let i = 0; i < d.length; i++) {
        for (let j = i + 1; j < d.length; j++) {
            if (d[i] > d[j]) {
                { d[j], d[i] } = { d[i], d[j] };
            }
        }
    } // 정렬 알고리즘
    for (let val of d) {
        budget = budget - val;
        if (budget >= 0) {
            result++;
        } 
    }
    return result;
}
