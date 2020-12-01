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
