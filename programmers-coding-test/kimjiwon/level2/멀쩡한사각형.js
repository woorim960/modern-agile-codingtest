function solution(w, h) {
  if (w === h) return w * h - w;
  const [maxNum, minNum] = [Math.max(w, h), Math.min(w, h)];
  const del = max(maxNum, minNum);
  return w * h - (w + h - del);
}

function max(maxNum, minNum) {
  return maxNum % minNum === 0 ? minNum : max(minNum, maxNum % minNum);
}
