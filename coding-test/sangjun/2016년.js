function solution(a, b) {
    const date = new Date(`2016, ${a}, ${b}`);
    
    let answer= '';
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        
    answer = (days[date.getDay()]);
    return answer;
}
