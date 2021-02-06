function solution(s) {
  let changeInt = s.replace( /[^0-9]/g, "" );
  
    if ( s.length === 4 || s.length === 6 ){
        if( changeInt === s ){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
