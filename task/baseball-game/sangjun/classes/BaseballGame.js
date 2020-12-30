'use strict';

import {inputTxt, resultSpace} from '../classes/DOM.js';
import Random from '../classes/Random.js';
import Output from './Output.js'

// const random = new Random();
// const output = new Output();

let computerrandomnum = Random.computerRandomNum();

export default class BaseballGame {
    strikecount = 0;
    ballcount = 0;

    play(){
      
      this.strikeballcount();
      return resultSpace;
    }
  
    strikeballcount(strikecount, ballcount){
      strikecount = ballcount = 0;
      let inputValue = inputTxt.value.split('');
      for (let i = 0; i < 3; i++) {
        if (computerrandomnum[i] === inputValue[i]){
          this.strikecount++;
        } else if (computerrandomnum.includes(inputValue[i])){
          this.ballcount++;
        }
        console.log(strikecount,ballcount)
      }
  }
   //   for (let j = 0; j< 3; j++) {
      //     strikecount = this.strike(i, j, strikecount);
      //     ballcount = this.ball(i, j, ballcount);
      //     output.readout(strikecount, ballcount);
          
      //   }
      // }

    // strike(i, j, strikecount) {
    //     let inputValue = inputTxt.value.split('');
    //     if (i === j && parseInt(inputValue[i]) === random.computerRandomNum[j]) {
    //       strikecount++;
          
    //     }
    //     return strikecount;
    // }
      
    // ball(i, j, ballcount) {
    //     let inputValue = inputTxt.value.split('');
    //     if (i != j && parseInt(inputValue[i]) === random.computerRandomNum[j]) {
    //         ballcount++;
    //     }
    //     return ballcount;
    // }

}
    