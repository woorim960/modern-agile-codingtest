function solution(s){
    const sToLower = s.toLowerCase().split("");
    
    let pp, yy;
    pp = yy = 0;
    
    for (let i = 0; i < sToLower.length; i++) {
        if (sToLower[i] === 'p'){
            pp++;
        } else if (sToLower[i] === 'y') {
            yy++;
        }
    }
    
    return pp === yy;
}
