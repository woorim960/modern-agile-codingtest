function solution(s){
    let answer = true;
    let Array="s".split("");
    let pp;
    let yy;
    for(let i=0; i<Array.length; i++){
        if(Array[i]=='p'){
            pp= pp+1;
        }else if(Array[i]=='P'){
            pp= pp+1;
        }else if(Array[i]=='Y'){
            yy=yy+1;
        }else if(Array[i]=='y'){
            yy= yy+1;
        }
    }
    if(pp==yy){
        answer=true;
    }else{
        answer=false;
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}
