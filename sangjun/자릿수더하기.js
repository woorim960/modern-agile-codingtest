function solution(n){
    let sum = 0;
    const str = n.toString().split('');  // const를 let보다 위에 선언해주어야 함. 나머지는 Good! 변수명도 Good! 다만 코테용 변수임. 개발할 땐 어디에 쓰이는지 명확하게 알도록 해주어야 함.
    for (let i = 0; i < str.length; i++ ){  // i++ 뒤에 공백 없앨 것.
        sum += parseInt(str[i])
    }
    return sum
}

// 아래와 같이 for of 문을 사용하면 내부 값을 쉽게 빼올 수 있음.
for (let s of str) {
    sum += parseInt(s);
}

