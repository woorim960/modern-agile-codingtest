function solution(n) {
  const set = new Set();
  for (let i = 3; i <= n; i += 2) {
    set.add(i);
  }
  set.add(2);
  for (let j = 3; j ** 2 < n; j++) {
    if (set.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        set.delete(k);
      }
    }
  }
  return set.size;
}
