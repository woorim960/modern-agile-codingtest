const arr = [7, 1, 5, 6, 2, 0, 3, 4, 9, 8];

for (let i = 0; i < arr.length; i++) {
  let idx = i;
  for (let j = i + 1; j < arr.length; j++) 
    if (arr[j] < arr[idx]) 
      idx = j;
  [arr[i], arr[idx]] = [arr[idx], arr[i]]
}

console.log(arr);
