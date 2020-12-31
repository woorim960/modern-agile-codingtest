function solution(n, lost, reserve) {
    const clothes = [];
    let count = 0;
    while(clothes.length < n){
        clothes.push(1);
    }
    reserve.forEach(ele => {
        clothes.splice(ele - 1, 1, 2);
    });
    lost.forEach(ele => {
        clothes.splice(ele - 1, 1, (clothes[ele - 1] - 1));
    });
    
    for (let i = 0; i < n; i++) {
        if (!clothes[i]) {
            temp(clothes, i);
        }
    }
    
    clothes.forEach(ele => {
        if (ele >= 1) {
            count++;
        }
    });
    return count;
}

function temp(clothes, i) {
    if (clothes[i + 1] === 2) {
        clothes[i + 1]--;
        clothes[i]++;
    }else if (clothes[i - 1] === 2) {
        clothes[i - 1]--;
        clothes[i]++;
    }
}