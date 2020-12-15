function solution(a, b) {
    const days = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const dates = [31,29,31,30,31,30,31,31,30,31,30,31];
    let week = -1;
    
    for( let month = 1; month < a+1; month++ ) {
        for( let day = 1; day <= dates[month-1]; day++ ) {
            week = week + 1;
            if( week == 7 ){
                week = 0;
            } 
            if( a==month && b == day ){
                 return days[week]; 
            } 
        }
    }
}