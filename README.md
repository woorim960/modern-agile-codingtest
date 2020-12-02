# 💻 우아한 애자일 코딩테스트
* 동아리명 : **우아한 애자일**  
* 창설 : 2020.12.03(목)
* 기수 : 1기

<br>

## 👨🏻‍💻 우아한 코더
* 팀장(리뷰어) : **박우림**
   - 블로그 : [세상의 잣대가 아닌](https://blog.naver.com/dnfla420)
   - 유튜브 : [우리밋_woorimIT](https://www.youtube.com/channel/UCS0F25vig_sPIQXMiK8IdSg?view_as=subscriber)
* 팀원 :
   - **고재성** <[jstkcoder](https://github.com/jstkcoder)>
   - **전순구** <[JeonSoongu](https://github.com/JeonSoongu)>
   - **전상준** <[jsj1510](https://github.com/jsj1510)>
   - **김지원** <[kimjiwonpg98](https://github.com/kimjiwonpg98)>
   - **정원지** <[JeongWonji](https://github.com/JeongWonji)>
   
<br>

## 📈 무엇을 왜 하는가?
* 언어 : 자바스크립트
* 저지 사이트 : [프로그래머스](https://programmers.co.kr/learn/challenges)
코딩 문제 풀이를 통하여 자바스크립트 문법을 익히고, 효율적인 코딩과 컨벤션이 무엇인지 공부한다.
궁극적으로 자바스크립트 언어를 통해 웹 서비스를 개발하기 위함이다.

<br>

## 🔍 어떻게 하는가?
1. 주어진 코딩테스트 과제를 수행
2. 풀이한 코딩 문제를 '파일명.js'로 만듦
3. '파일명.js'를 개인별 Fork한 Repo의 Branch로 PUSH
4. 개인별 깃허브 Repo에 PUSH된 Branch를 [woorim960/woowahan-agile-codingtest](https://github.com/woorim960/woowahan-agile-codingtest)로 PR을 보냄
5. 리뷰어 **박우림**이 도착한 PR을 검토하여 코드 리뷰
6. 해당 과정을 반복 -> 자바스크립트 문법에 적응 & 효율적인 코딩과 컨벤션을 유지할 수 있을 때까지

<br>

## 🔖 예시
* 최적화 전 코드
```javascript
function solution(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            sum += a;
            a = a-1;
        }
        return sum;
    } else {
        for (let i = a; i <= b; i++) {
            sum += a;
            a = a+1;
        }
        return sum;
    }
}
```  
* 최적화 후 코드...
```javascript
/*
* for가 중복되기에 이를 하나로 짤 수 있는 방향으로 가는 것이 좋다.
* return 값이 같다면 if문이 끝나는 시점에 한번만 호출하는 것이 좋다.
* sum += a가 아닌 증가하는 값을 그대로 넣어주면 된다. -> sum += i;
* else는 최대한 삼가고, else if로 조건을 명시해주는 것이 좋다.
*/

function solution(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            sum += a;
            a = a-1;
        }
    } else {
        for (let i = a; i <= b; i++) {
            sum += a;
            a = a+1;
        }
    }

    return sum;
}

/*
* 선언되는 변수가 for나 while, if 등에서 한번만 사용된다면 사용된 구문 바로 상단에 선언해주는 것이 좋다. -> 어디서 사용된 것인지 알기가 좋으며, 최상단에 선언된 변수는 여러번 사용됐다는 걸 암묵적으로 알 수 있다.
* 오래 사용될, 혹은 코드의 진행을 좌지우지하는 변수들 같은 경우는 상수로 선언해주며 대문자로 선언해야한다.
* 대문자들로 지어진 변수는 상수이며, 보통 이러한 값들을 변경하는 경우 프로그램이 실행되지 않는다.
* 자바스크립트는 const와 let밖에 없기 때문에 모든 const를 대문자로 짓지 않으며, 중요한 상수값들에 한해서만 대문자로 선언한다.
* 상수는 변수보다 상단에 선언해야한다.
*/
function solution(a, b) {
    const MIN = a < b ? a : b,
          MAX = a > b ? a : b;

    let sum = 0;
    for (let num = MIN; num <= MAX; num++) {
        sum += num;
    }

    return sum;
}
```

<br>

## 📮 피드백

### • 이름을 통해 의도를 드러내라.

변수 이름, 함수(메서드) 이름, 클래스 이름을 짓는데 시간을 투자하라.
이름을 통해 변수의 역할, 함수의 역할, 클래스의 역할에 대한 의도를 드러내기 위해 노력하라.
연속적인 숫자를 덧붙인 이름(arr1, arr2, arr3...)이나 불용어(info, Data, a, an, the)를 추가하는 방식은 적절하지 못하다.

### • 축약하지마라.

의도를 드러낼 수 있다면 이름이 길어져도 괜찮다.

### • space(공백)도 convention이다.

for, while, if문 사이의 space도 convention이다.

### • 불필요하게 공백라인을 만들지 않는다.

공백 라인을 띄우는 것도 코드상에 문맥이 달라지는 부분에 의도를 가지고 뛰우면 좋겠다.

### • 구현 순서도 convention이다.

구현 순서에 대한 convention을 지키는 것도 읽기 좋은 코드를 구현하는데 의미가 있다.

클래스의 구현 순서를 지키면서 프로그래밍한다.

```javascript
class WoowahanAgile() {
    상수 또는 클래스 변수

    인스턴스 변수

    생성자

    메서드
}
```

```javascript
전역 상수
전역 변수

function woowahanAgile() {
    변수

    기능 구현
}
```

### • 반복하지 마라

중복은 소프트웨어에서 모든 악의 근원이다.

```javascript
const arr = [1, 2];

if (arr[0] === 1) {
    ...
}
if (arr[1] === 1) {
    ...
}

위 코드는 아래처럼 for로 단축할 수 있다.

for (let num of arr) {
    if (num === 1) {
        ...
    }
}
```

```javascript
// 반복문 안에서 변수를 생성하지 마라. 이 또한 반복이다.
for (let i = 0; i < length; i++) {
    let a = a+i;
}
```

### • space vs tab 혼용

들여쓰기에 space와 tab을 혼용하지 않는다.

둘 중에 하나만 사용한다.

tab이 일반적이다.

### • 의미없는 주석을 달지 않는다.

변수 이름, 함수(메서드) 이름을 통해 어떤 의도인지가 드러난다면 굳이 주석을 달지 않는다.

모든 변수와 함수에 주석을 달기보다 가능하면 이름을 통해 의도를 드러내고, 의도를 드러내기 힘든 경우 주석을 다는 연습을 한다.

### • 값을 하드코딩하지 마라.

문자열 숫자 등의 값을 하드코딩하지 마라.

상수를 만들고 이름을 부여해 이 변수의 역할이 무엇인지 의도를 드러내라.

### • git commit 메세지를 의미있게 작성해라.

commit 메시지에 해당 commit에서 작업한 내용에 대한 이해가 가능하도록 작성한다.
