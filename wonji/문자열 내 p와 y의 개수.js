function solution(s){
    
    var presults = s.match(/p/g); 
    var yresults = s.match(/y/g);
    var Presults = s.match(/P/g); 
    var Yresults = s.match(/Y/g);
    
    if(presults !== null) {
        var pp = presults.length;
    }
    if(yresults !== null) {
        var yy = yresults.length;
    }
    if(Presults !== null) {
        var PP = Presults.length;
    }
    if(Yresults !== null) {
        var YY = Yresults.length;
    }
    return pp + PP === yy + YY
}
