function solution(n, lost, reserve) {
    const clothes = [];
    let count = 0;
    while (clothes.length < n) { 
        clothes.push(1);
    }
    reserve.forEach(el => {    
        clothes.splice(el - 1, 1, 2);
    });
    lost.forEach(el => {
        clothes.splice(el - 1, 1, (clothes[el - 1] - 1));
    });
    
    for (let i = 0; i < n; i++) {
        if (!clothes[i]) {
            temp(clothes, i);
        }
    }
    
    clothes.forEach(el => {
        if (el >= 1) {
            count++;
        }
    });
    return count;
}

function temp(clothes, i) {
    if (clothes[i + 1] === 2) {
        clothes[i + 1]--;
        clothes[i]++;
    }else if (clothes[i - 1] === 2) { // else 앞에 
        clothes[i - 1]--;
        clothes[i]++;
    }
}
