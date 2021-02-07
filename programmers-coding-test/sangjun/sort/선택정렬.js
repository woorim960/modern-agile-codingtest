function solution() {

    const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

    for (let i in arr) {
        let swap;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

console.log(solution());