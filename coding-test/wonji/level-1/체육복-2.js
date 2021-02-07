function solution(n, lost, reserve) {
    let haveNum = n - lost.length; 
  	// 전체 인원에서 도난당한 사람을 빼준다.
  	// haveNum은 체육복을 가진 사람의 숫자이다.

  	// 여벌의 체육복을 지녔지만 도난당한 사람이 있다면 
  	// 배열에서 지우고 haveNum 카운트를 올린다.
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            haveNum ++;
            i--;				
          	// 중복되는 모든 경우를 제거하기 위해서 i값을 다시 -1 해주었다.
        }
    }
	
  	// 잃어버린 사람 앞이나 뒤에 여벌의 체육복을 가진 사람이 있다면,
  	// 체육복을 빌리고, haveNum을 카운트한다.
    for (let num of lost) {
        let isFront = reserve.includes(num - 1)
        let isBehind = reserve.includes(num + 1)
		
    // 잃어버린 학생이 3, 5 / 여벌가진 학생이 4 였을때
    // 4번 학생이 3번에게 빌려주고 
    // 또 다시 5번에게 빌려주는 경우를 제거하기 위해서
    // 빌려준 학생은 배열에서 제외시킨다.
        if (isFront) {
            reserve.splice(isFront, 1);
            haveNum++;
        } else if (isBehind) {
            reserve.splice(isBehind, 1);
            haveNum++;
        }
    }
    return haveNum;
}
