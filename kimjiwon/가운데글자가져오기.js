function solution(s) {
    const word = s.split('');
    const length = word.length % 2 ? odd(word) : even(word);
    return length;
}

function even (t) {
    return `${t[t.length / 2 - 1] + t[t.length / 2] }`;
}

function odd (t) {
    return `${t[(t.length - 1) / 2]}`;
}

