function solution(s) {
    let check;
    if ( s.length == 4 || s.length == 6 ){
        check = s.replace( /[^0-9]/g, "" );
    
        if( check == s ){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}