function solution() {
    const list = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5 ,2];
    const result = [];
    const maxNum = Math.max(...list);
    const count = {};

    for (let i = 0; i < maxNum + 1; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < list.length; i++) {
        count[list[i]]++;
    }

    for (let i = 0; i < maxNum + 1; i++) {
        for (let j = 0; j < count[i]; j++) {
            result.push(i);
        }
    }
    return result.join(" ");
}

console.log(solution());