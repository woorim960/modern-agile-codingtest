function solution() {
    const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

    const count = [];
    const result = [];

    //숫자초기화
    for (let i = 0; i <= arr.length; i++) {
        count[i] = 0;
    }
    //숫자갯수 저장
    for (let j = 0; j < arr.length; j++) {
        count[arr[j]] += 1;
    }
    //누적합
    for (i = 0; i < arr.length; i++) {
        count[i + 1] += count[i];
    }
    //누적합이 가리키는인덱스 결과에 숫자를 넣음
    for (j = 0; j < arr.length; j++) {
        result[count[arr[j]] - 1] = arr[j];
        count[arr[j]] -= 1;
    }
    return result;
};

solution();