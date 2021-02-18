function solution(n) {
    const temp = [];
    let sum = 0;
    
    for(let i = n; i >= n / i; i--) {
        if(!(n % i)) {   
            temp.push(i);
            if(i === (n / i)){   
                break;
            }
            temp.push(n / i);
        }
    }

    temp.forEach(el => {  
        sum += el;
    })
    return sum;
}
