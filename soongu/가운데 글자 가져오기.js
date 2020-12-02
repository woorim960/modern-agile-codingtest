function solution(s) {
  if (s.length % 2 == 1) {
      return s.substring(s.length/2, (s.length/2)+1);
  } else {
      return (s.substring((s.length/2)-1, (s.length/2)+1));
  }
}

// 최적화

function solution(s) {
  if (s.length % 2) {
      return s.substring(s.length / 2, (s.length / 2) + 1);
  } else {
      return (s.substring((s.length / 2) -1, (s.length / 2) + 1));
  }
}

function solution(s) {
  return s.length % 2 ? s.substring(s.length / 2, (s.length / 2) + 1) : s.substring((s.length / 2) -1, (s.length / 2) + 1);
}

function solution(s) {
  return s.substring(parseInt((s.length-1) / 2), parseInt(s.length / 2)+1);
}
