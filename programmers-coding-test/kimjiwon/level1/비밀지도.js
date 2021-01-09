function solution(n, arr1, arr2) {
    const decode = [];
    const fliter = ' ';
    for (let i = 0; i < n; i++) {
        decode.push(arr1[i] | arr2[i]);
        decode[i] = decode[i].toString(2);
        
        decode[i] = decode[i].replace(/1/gi, '#');
        decode[i] = decode[i].replace(/0/gi, ' ');
        
        if(decode[i].length !== n) {
            while (decode[i].length < n) {
                decode[i] = fliter.concat(decode[i]);
            }
        }
    }
    return decode;
}