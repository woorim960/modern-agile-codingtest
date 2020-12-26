function errorSituation(inputvalue) {
    let delOverlap = new Set(inputvalue);
  
    if (isNaN(parseInt(inputvalue))) {
      error();
    }
    if (inputvalue.length !== 3) {
        error();
    }
    if (inputvalue.split('').length !== delOverlap.size) {
        error();
    }
}
  
//잘못 입력했을 때 나오는 창
function error() {
    alert('다시 입력해주세요!');
    inputTxt.value = '';
}

export {errorSituation};