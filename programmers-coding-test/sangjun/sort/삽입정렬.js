function solution() {
    const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

    for (let i in arr) {
        const firstData = arr[i];
        let j = i - 1;
        
        while(j > -1 && arr[j] > firstData) {
            arr[j + 1] = arr[j];
            arr[j] = firstData;
            firstData = arr[j];
            j--;
        }
    }
    return arr;
}

console.log(solution());