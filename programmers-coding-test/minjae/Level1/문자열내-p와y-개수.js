function solution(s){
    const lowerString = s.toLowerCase();

     let pCounter, yCounter;
     pCounter = yCounter = 0;
    
     for (let i = 0; i < lowerString.length; i++) {
         if (lowerString[i].includes('p')) {
             pCounter++;
         } else if (lowerString[i].includes('y')) {
             yCounter++;
         } 
     }
     return pCounter === yCounter
 }