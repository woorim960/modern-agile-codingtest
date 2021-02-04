function soultion() {
    let list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

    for (let i = 0; i < list.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[minIndex] > list[j]) minIndex = j
        }
        [list[i], list[minIndex]] = [list[minIndex], list[i]];
    }
    return list;
}

console.log(soultion());