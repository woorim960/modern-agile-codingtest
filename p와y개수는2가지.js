function solution(s){
    const lo = s.toLowerCase();
    const array = lo.split("");
    let pp = 0;
    let yy = 0;
    for ( let i = 0; i < array.length; i++){
        if ( array[i] == 'p' ){
            pp = pp + 1;
        } else if ( array[i] == 'y' ){
            yy= yy + 1;
        }
    }
    if ( pp == yy ){
        return true;
    } else {
        return false;
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    //최대한 줄인 2번째 방법
   //return s.toLowerCase().split( "p" ).length === s.toLowCase().spilt( "y" ).length;
}
