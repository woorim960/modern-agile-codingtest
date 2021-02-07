//여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 = reserve
//체육복을 도난당한 학생들의 번호가 담긴 배열 = lost

function solution(n, lost, reserve) {
    //진짜 체육복이 없는 학생들의 번호가 담긴 배열
    const realLost = lost.filter(a => !reserve.includes(a));
    //진짜 체육복을 두개 가지고 있는 학생들의 번호가 담긴 배열
    let realReserve = reserve.filter(a => !lost.includes(a));
    
    //전체 학생의 수 - 체육복이 없는 학생들중 체육복 못빌린 학생 수
    return n - realLost.filter(a => {
        let b = realReserve.find(r => Math.abs(r-a) <= 1);
        if(!b) return true;
        realReserve = realReserve.filter(r => r !== b);
    }).length;
}