'use strict';


export default class Random{
  
 computerRandomNum(){
    const computerNum = [];
    for (let i = 0; i < 3; i++) {
      computerNum.push([Math.floor(Math.random() * (9 - i))]);
    }
    console.log(computerNum);
    return computerNum;
  }
} 