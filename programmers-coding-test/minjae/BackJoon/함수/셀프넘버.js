const selfNumberList = [];

function solution() {
    for(let i = 1; i <= 10000; i++) {
        extractSelfNumber(i);
    }   

    for(let i = 1; i <= 10000; i++) {
        if(!selfNumberList.includes(i)) console.log(i);
    }
}

function extractSelfNumber(n) {
    let selfNumber = 0;

    if(n < 10) selfNumber = 2 * n;
    else if(n < 100) selfNumber = n + parseInt(n / 10) + (n % 10);
    else if (n < 1000) selfNumber = n + parseInt(n / 100) + parseInt((n % 100) / 10) + (n % 10);
    else selfNumber = n + parseInt(n / 1000) + parseInt((n % 1000) / 100) + parseInt((n % 100) / 10) +(n % 10);

    selfNumberList.push(selfNumber);
}

solution();