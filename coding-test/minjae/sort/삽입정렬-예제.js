function solution() {
    let list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
    
    for (let i = 1; i < list.length; i++) {
        for (let j = i; j > 0; j--) {
            if (list[j] < list[j - 1]) [list[j], list[j - 1]] = [list[j - 1], list[j]];
            else break;
        }
    }
    return list;
}
console.log(solution());