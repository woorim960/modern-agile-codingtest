const arr = [1, 2, 4, 6, 8, 10, 13, 16, 187, 267];

const target = 30897;
function binarySearch(start, end) {
  if (start > end) return -1;

  const mid = parseInt((start + end) / 2);
  if (target > arr[mid]) return binarySearch(mid + 1, end);
  if (target < arr[mid]) return binarySearch(start, mid - 1);
  return mid;
}

console.log(binarySearch(0, arr.length - 1));

