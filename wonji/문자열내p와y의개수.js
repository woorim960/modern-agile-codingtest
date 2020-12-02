function solution(s){
    
    const p = s.match(/p/ig).length;  
    const y = s.match(/y/ig).length;
    const P = s.match(/P/ig).length; 
    const Y = s.match(/Y/ig).length;
    const pP = p + P
    const yY = y + Y
    
     if(pP !== null && yY != null) {
         return pP === yY
     }
}

/* 
* i : ignore, g : group
* "abcABC".match(/a/gi); -> a를 대소문자를 무시(구분하지 않고)하여 하나의 그룹으로 반환해준다.
* 단, "abcABC".match(/q/gi); -> 이와 같이 지정해준 패턴의 문자가 문자열 내에 없을 경우 null을 반환한다.
* null에는 ".length"를 사용할 수 없기 때문에 런타임에러가 발생한 것.
* 따라서 null인지를 먼저 검사한 후에 ".length"를 사용해주어야 한다.
*/
function solution(s){
    let p = s.match(/p/ig),
        y = s.match(/y/ig);
    
    p = p === null ? 0 : p.length;
    y = y === null ? 0 : y.length;
    
    return p === y;
}
