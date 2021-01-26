function solution(arr1, arr2) {
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
