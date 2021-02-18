let _numbers;
let _numbersLength;
let _target;
let cnt = 0;

function solution(numbers, target) {
    _numbers = numbers;
    _numbersLength = _numbers.length;
    _target = target;
    
    dfs(0, 0)
    return cnt;
}

function dfs(idx, total) {
    if (idx === _numbersLength) {
        if (total === _target) cnt++;
        return;
    }
    dfs(idx + 1, total + _numbers[idx]);
    dfs(idx + 1, total - _numbers[idx]);
}
