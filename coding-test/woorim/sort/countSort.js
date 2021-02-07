const arr = [7, 1, 5, 4, 8, 6, 3, 2, 9, 8, 0];

function countSort() {
  const countedArr = new Array(arr.length - 1).fill(0);
  const countSortedArr = [];

  for (let ar of arr) {
    countedArr[ar]++;
  }

  for (let i = 0; i < countedArr.length; i++) {
    for (let j = 0; j < countedArr[i]; j++) {
      countSortedArr.push(i);
    }
  }
  return countSortedArr;
}

const countSortedArr = countSort();
console.log(countSortedArr);

