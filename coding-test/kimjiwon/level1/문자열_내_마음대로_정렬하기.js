function solution(strings, n) {
 strings.sort(function(a,b){
        let first = a[n];
        let second = b[n];
        if(first === second){
            return (a > b) - (a < b);
        }else {
            return (first > second) - (first < second);
        }
    })
    return strings;
}