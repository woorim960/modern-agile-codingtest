const arr = [7, 1, 5, 6, 2, 0, 3, 4, 9, 8];

// 삽입 정렬 : 원소가 정렬될 위치에 배치되는 알고리즘.
// 나보다 큰 원소를 만나면 위치를 바꾸고 작은 워소를 만나면 그 자리에서 멈춘다.
for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    } else {
      break;
    }
  }
}

console.log(arr);
