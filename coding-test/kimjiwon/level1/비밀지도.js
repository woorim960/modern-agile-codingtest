function solution(n, arr1, arr2) {
  const decode = [];
  const fliter = " ";
  for (let i = 0; i < n; i++) {
    //or연산을 이용해 비밀지도1과 비밀지도 2 합침
    decode.push(arr1[i] | arr2[i]);
    decode[i] = decode[i].toString(2);
    //2진법으로 바꾼 후 #과 공백으로 바꿈
    decode[i] = decode[i].replace(/1/gi, "#");
    decode[i] = decode[i].replace(/0/gi, " ");
    //앞에 공백이 나왔을 경우 concat을 이용해 공백을 넣어줌
    if (decode[i].length !== n) {
      while (decode[i].length < n) {
        decode[i] = fliter.concat(decode[i]);
      }
    }
  }
  return decode;
}
