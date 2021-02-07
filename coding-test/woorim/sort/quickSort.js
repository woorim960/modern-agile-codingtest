const arr = [7, 1, 5, 4, 8, 6, 3, 2, 9, 8, 0];

function quickSort(arr, start, end) {
  if (start >= end) return;

  const pivot = start;
  let [left, right] = [start + 1, end];

  while (left <= right) {
    while (left <= end && arr[left] <= arr[pivot]) {
      left++;
    }
    while (right > start && arr[right] >= arr[pivot]) {
      right--;
    }
    if (left > right) {
      [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  quickSort(arr, start, right - 1);
  quickSort(arr, left, end);
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);

